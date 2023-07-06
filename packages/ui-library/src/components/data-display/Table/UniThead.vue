<script setup lang="ts">
import { useInject, useSortEmit } from "./composables";
import commonStyle from "./commonStyle.module.scss";
import { ColumnData } from "./types";

import UniTheadSelection from "./UniTheadSelection.vue";
import UniTheadSort from "./UniTheadSort.vue";

const {
  columnsInfo: { columnsData },
  showShadow,
  tableProps,
  rootSlotKeys,
  tableState,
} = useInject();
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
          :class="[
            $style['header__cell'],
            $style['header__expand-column-cell'],
            { [commonStyle['cell--shadow-right']]: showShadow.expandColumnShadowVisible },
          ]"
        ></th>
      </template>

      <template v-if="tableProps.selection?.type">
        <UniTheadSelection :class="$style['header__cell']"></UniTheadSelection>
      </template>

      <th
        v-for="col in columnsData"
        :key="col.key"
        scope="col"
        :style="{
          left: col.leftOffset && `${col.leftOffset}px`,
          right: col.rightOffset && `${col.rightOffset}px`,
          zIndex: col.fixed ? 3 : 2,
        }"
        :class="[
          $style['header__cell'],
          {
            [commonStyle['cell--shadow-right']]: col.leftLastFixedColumn && showShadow.showLeftFixedColumnShadow,
            [commonStyle['cell--shadow-left']]: col.rightFirstFixedColumn && showShadow.showRightFixedColumnShadow,
            [$style['head__cell--sortable']]: col.sortable,
          },
        ]"
        @click.stop="handleSort(col)"
      >
        <UniTheadSort v-if="col.sortable" :column-data="col"></UniTheadSort>

        <template v-if="rootSlotKeys.has(`header-${col.key}`)">
          <slot name="theadCell" :column-key="`header-${col.key}`"></slot>
        </template>
        <template v-else>
          <span>{{ col.title }}</span>
        </template>
      </th>
    </tr>
  </thead>
</template>

<style lang="scss" module>
.header__cell {
  box-sizing: border-box;
  position: sticky;
  top: 0;
  padding: 14px 12px;

  word-wrap: break-word;
  text-align: left;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: rgb(17 24 39);
  background: white;
  border-bottom: 1px solid rgb(226 232 240);
  user-select: none;
}

.head__cell--sortable {
  cursor: pointer;
  padding-left: 24px;
}

.header__expand-column-cell {
  position: sticky;
  left: 0;
  z-index: 3;
}
</style>
