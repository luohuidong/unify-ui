<script setup lang="ts">
import { useInject, useSortEmit } from "./composables";
import commonStyle from "./commonStyle.module.scss";
import { ColumnData } from "./types";
import { watchEffect } from "vue";

const props = defineProps<{
  col: ColumnData;
}>();

const { showShadow, tableProps, rootSlotKeys } = useInject();
const { handleSortEmit } = useSortEmit();

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

watchEffect(() => {
  console.log("col", props.col);
});
</script>

<template>
  <th
    scope="col"
    :class="[
      $style['cell'],
      {
        [commonStyle['cell--shadow-right']]: col.leftLastFixedColumn && showShadow.showLeftFixedColumnShadow,
        [commonStyle['cell--shadow-left']]: col.rightFirstFixedColumn && showShadow.showRightFixedColumnShadow,
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
  </th>
</template>

<style lang="scss" module>
@use "./styles/thead";

.cell {
  @include thead.cell;
  @include thead.cell--sticky-top;
}

.cell--sortable {
  cursor: pointer;
  padding-left: 24px;
}

.cell--horizontal-sticky {
  z-index: 3;
}
</style>
