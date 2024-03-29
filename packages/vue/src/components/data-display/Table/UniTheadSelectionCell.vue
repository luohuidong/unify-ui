<script setup lang="ts">
import { watchEffect, reactive, computed } from "vue";

import { UniCheckbox } from "@/index";
import { useInject } from "./composables";
import { SetUtils } from "./utils";
import type { Record, Key } from "./types";

const { tableProps, tableState, tableEmits, columnsInfo } = useInject();
const { hasLeftFixedColumn } = columnsInfo;

const state = reactive({
  checkboxValue: false,
  indeterminate: false,
  checkboxDisable: false,
});

// checkbox state
watchEffect(() => {
  if (tableProps.selection?.type !== "multiple") {
    return;
  }

  const selectableRowKeys = new Set<string | number>();
  let unselectableRowCount = 0;
  tableProps.data.forEach((item) => {
    if (tableProps.selection?.disabledCondition?.(item)) {
      unselectableRowCount++;
    } else {
      selectableRowKeys.add(item[tableProps.rowKey]);
    }
  });

  // Disable the checkbox component if all data are unselectable.
  if (tableProps.data.length - unselectableRowCount === 0) {
    // set checkbox value to false and indeterminate state to false when there is no table data
    state.checkboxValue = false;
    state.indeterminate = false;
    state.checkboxDisable = true;
    return;
  }

  // Check if all selectable row are selected
  const result = SetUtils.intersection(selectableRowKeys, tableProps.selectedRowKeys);
  if (result.size === selectableRowKeys.size) {
    // Set the checkbox value to true and the indeterminate state to false if all table data are selected.
    state.checkboxValue = true;
    state.indeterminate = false;
  } else if (result.size < selectableRowKeys.size && result.size > 0) {
    // Select some but not all of the selectable rows
    state.checkboxValue = false;
    state.indeterminate = true;
  } else {
    // None of the selectable rows are selected
    state.checkboxValue = false;
    state.indeterminate = false;
  }
  state.checkboxDisable = false;
});

function SelectionAllToggle(isSelectAll: boolean) {
  const changedRowKeys: Key[] = [];
  const changedRecords: Record[] = [];
  const newSelectedRowKeys = new Set(tableProps.selectedRowKeys);

  tableProps.data.forEach((item) => {
    const rowKey = item[tableProps.rowKey];

    // Rows must be selectable
    if (tableProps.selection?.disabledCondition?.(item)) {
      return true;
    }

    if (isSelectAll) {
      // Exclude the data that has already been selected
      if (tableProps.selectedRowKeys?.has(rowKey)) return;
      changedRowKeys.push(rowKey);
      changedRecords.push(item);
    } else {
      // Exclude the data that has not been selected yet
      if (!tableProps.selectedRowKeys?.has(rowKey)) return;
      changedRowKeys.push(rowKey);
      changedRecords.push(item);
    }

    isSelectAll ? newSelectedRowKeys.add(rowKey) : newSelectedRowKeys.delete(rowKey);
  });

  tableEmits("update:selectedRowKeys", newSelectedRowKeys);
  tableEmits("selectAll", {
    selected: isSelectAll,
    rowKeys: changedRowKeys,
    records: changedRecords,
  });
}

const selectionColumnOffset = computed(() => tableState.selectionColumnOffset + "px");
</script>

<template>
  <th
    :class="[
      $style['cell'],
      {
        [$style['cell--left-sticky']]: hasLeftFixedColumn,
      },
    ]"
  >
    <div :class="$style['cell__inner-container']">
      <UniCheckbox
        v-if="tableProps.selection?.type === 'multiple'"
        v-model:checked="state.checkboxValue"
        :indeterminate="state.indeterminate"
        :disabled="state.checkboxDisable"
        @change="SelectionAllToggle"
      ></UniCheckbox>
    </div>
  </th>
</template>

<style lang="scss" module>
@use "./styles/thead";
@use "./styles/common";

.cell {
  @include thead.cell;
  @include thead.cell--sticky-top;
}

.cell--left-sticky {
  left: v-bind(selectionColumnOffset);
  z-index: 3;
}

.cell__inner-container {
  @include common.cell__inner-container;
}
</style>
