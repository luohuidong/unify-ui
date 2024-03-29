<script setup lang="ts">
import { ref } from "vue";

import { useInject, useSortEmit, useHeaderResize } from "./composables";
import commonStyle from "./commonStyle.module.scss";
import { ColumnData } from "./types";
import { defaultColumnMinWidth } from "./constant";

const props = defineProps<{
  col: ColumnData;
}>();

const { showShadow, tableProps } = useInject();
const { handleSortEmit } = useSortEmit();

const thRef = ref<HTMLTableCellElement>();
const { handleMouseDown, dragging } = useHeaderResize(
  thRef,
  props.col.key,
  props.col.minWidth || defaultColumnMinWidth
);

function handleSort(column: ColumnData) {
  if (!column.sortable) return;

  const currentSort = tableProps.sort;
  const sortTypes = column.sortType || ["ascending", "descending"];

  // The first specified sort type in `sortTypes` will be used to sort the current column if the table is not sorted.
  if (!currentSort) {
    handleSortEmit({ columnKey: column.key, order: sortTypes[0] });
    return;
  }

  // The first specified sort type in `sortTypes` will be used to sort the current column if the current column is not sorted.
  if (currentSort.columnKey !== column.key) {
    handleSortEmit({ columnKey: column.key, order: sortTypes[0] });
    return;
  }

  // change current column sort order
  const index = sortTypes.findIndex((sortType) => sortType === currentSort.order);
  if (index === sortTypes.length - 1) {
    handleSortEmit(null);
  } else {
    handleSortEmit({ columnKey: column.key, order: sortTypes[index + 1] });
  }
}
</script>

<template>
  <th
    ref="thRef"
    scope="col"
    :class="[
      $style['cell'],
      {
        [commonStyle['cell--shadow-right']]:
          col.leftLastFixedColumn && showShadow.showLeftFixedColumnShadow,
        [commonStyle['cell--shadow-left']]:
          col.rightFirstFixedColumn && showShadow.showRightFixedColumnShadow,
        [$style['cell--sortable']]: col.sortable,
        [$style['cell--horizontal-sticky']]: col.fixed,
      },
    ]"
    :style="{
      left: col.leftOffset && `${col.leftOffset}px`,
      right: col.rightOffset && `${col.rightOffset}px`,
    }"
    @click.stop="handleSort(col)"
  >
    <slot></slot>

    <span
      v-if="col.resizeable"
      :class="[$style['resize-handle'], { [$style['resize-handle--dragging']]: dragging }]"
      @mousedown="handleMouseDown"
    ></span>
  </th>
</template>

<style lang="scss" module>
@use "./styles/thead";

.cell {
  @include thead.cell;
  @include thead.cell--sticky-top;
  user-select: none;
}

.cell--sortable {
  cursor: pointer;
  padding-left: 24px;
}

.cell--horizontal-sticky {
  z-index: 3;
}

.resize-handle {
  box-sizing: content-box;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  padding: 0 4px;
  cursor: col-resize;
  background-color: rgb(0 0 0 / 0%);
  background-clip: content-box;
}

.resize-handle:hover,
.resize-handle--dragging {
  background-color: rgb(0 0 0 / 10%);
}
</style>
