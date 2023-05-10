<script setup lang="ts">
import { useInject, useSortEmit } from "./composable";
import commonStyle from "./commonStyle.module.scss";
import { ColumnData } from "./types";

import UniTheadSelection from "./UniTheadSelection.vue";
import UniTheadSort from "./UniTheadSort.vue";

const { columnsData, showShadow, tableProps, rootSlotKeys, tableState } = useInject();
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
</script>

<template>
  <thead>
    <tr>
      <template v-if="tableState.showExpandToggleCell">
        <th
          class="cell expand-column-cell"
          :class="{ [commonStyle['cell--shadow-right']]: showShadow.expandColumnShadowVisible }"
        ></th>
      </template>

      <template v-if="tableProps.selection?.type">
        <UniTheadSelection class="cell"></UniTheadSelection>
      </template>

      <th
        v-for="(col, index) in columnsData"
        :key="col.key"
        scoop="column"
        :style="{
          left: col.leftOffset && `${col.leftOffset}px`,
          right: col.rightOffset && `${col.rightOffset}px`,
          zIndex: col.fixed ? 3 : 2,
        }"
        class="cell"
        :class="{
          [commonStyle['cell--shadow-right']]:
            col.leftLastFixedColumn && showShadow.showLeftFixedColumnShadow,
          [commonStyle['cell--shadow-left']]:
            col.rightFirstFixedColumn && showShadow.showRightFixedColumnShadow,
          'cell--sortable': col.sortable,
        }"
        @click.stop="handleSort(col)"
      >
        <template v-if="rootSlotKeys.has(`header-${col.key}`)">
          <slot name="theadCell" :column-key="`header-${col.key}`"></slot>
        </template>
        <template v-else>
          {{ col.title }}
        </template>

        <UniTheadSort v-if="col.sortable" :column-data="col"></UniTheadSort>

        <div v-if="index !== columnsData.length - 1" class="divider"></div>
      </th>
    </tr>
  </thead>
</template>

<style lang="scss" scoped>
$border-color: #f0f0f0;

.cell {
  box-sizing: border-box;

  position: sticky;
  top: 0;

  height: 44px;
  padding: 11px;

  word-wrap: break-word;
  text-align: left;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  border-bottom: 1px solid $border-color;
  background: #f5f6fa;
  color: #666666;
}

.cell--sortable {
  cursor: pointer;
}

.expand-column-cell {
  position: sticky;
  left: 0;
  z-index: 3;
}

.divider {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 1px;
  background: $border-color;
}
</style>
