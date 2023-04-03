<script setup lang="ts">
import { watchEffect, reactive } from "vue";

import { EzCheckbox } from "@/components";
import { useInject } from "./composable";
import { SetUtils } from "./utils";
import type { Record, Key } from "./types";
import commonStyle from "./commonStyle.module.scss";

const { rootProps, rootState, rootEmit, showShadow } = useInject();

const state = reactive({
  checkboxValue: false,
  indeterminate: false,
  checkboxDisable: false,
});

// checkbox state
watchEffect(() => {
  if (rootProps.selection?.type !== "multiple") {
    return;
  }

  const selectableRowKeys = new Set<string | number>();
  let unselectableRowCount = 0;
  rootProps.data.forEach((item) => {
    if (rootProps.selection?.disabledCondition?.(item)) {
      unselectableRowCount++;
    } else {
      selectableRowKeys.add(item[rootProps.rowKey]);
    }
  });

  // if all data are unselectable, disable checkbox component
  if (rootProps.data.length - unselectableRowCount === 0) {
    // set checkbox value to false and indeterminate state to false when there is no table data
    state.checkboxValue = false;
    state.indeterminate = false;
    state.checkboxDisable = true;
    return;
  }

  // check if all selectable row are selected
  const result = SetUtils.intersection(selectableRowKeys, rootState.selectedRowKeys);
  if (result.size === selectableRowKeys.size) {
    // if all table data is selected, set checkbox value to true, and indeterminate state is false.
    state.checkboxValue = true;
    state.indeterminate = false;
  } else if (result.size < selectableRowKeys.size && result.size > 0) {
    // selectable row are partialy selected
    state.checkboxValue = false;
    state.indeterminate = true;
  } else {
    // all selectable row are unselected
    state.checkboxValue = false;
    state.indeterminate = false;
  }
  state.checkboxDisable = false;
});

function SelectionAllToggle(isSelectAll: boolean) {
  const changedRowKeys: Key[] = [];
  const changedRecords: Record[] = [];

  rootProps.data.forEach((item) => {
    const rowKey = item[rootProps.rowKey];

    // record must be selectable
    if (rootProps.selection?.disabledCondition?.(item)) {
      return true;
    }

    if (isSelectAll) {
      // exclude the data which is already selected before user trigger select all data
      if (rootState.selectedRowKeys.has(rowKey)) return;
      changedRowKeys.push(rowKey);
      changedRecords.push(item);
    } else {
      // data must be selected before user unselect all data
      if (!rootState.selectedRowKeys.has(rowKey)) return;
      changedRowKeys.push(rowKey);
      changedRecords.push(item);
    }

    isSelectAll ? rootState.selectedRowKeys.add(rowKey) : rootState.selectedRowKeys.delete(rowKey);
  });

  rootEmit("update:selectedRowKeys", new Set([...rootState.selectedRowKeys]));
  rootEmit("selectAll", {
    selected: isSelectAll,
    rowKeys: changedRowKeys,
    records: changedRecords,
  });
}
</script>

<template>
  <th class="th-selection-cell">
    <div
      v-if="rootProps.selection?.type === 'multiple'"
      :class="[
        commonStyle['cell__inner'],
        commonStyle['cell__inner--horizontal-center'],
        { [commonStyle['cell--shadow-right']]: showShadow.selectionColumnShadowVisible },
      ]"
    >
      <EzCheckbox
        v-model:checked="state.checkboxValue"
        :indeterminate="state.indeterminate"
        :disabled="state.checkboxDisable"
        @change="SelectionAllToggle"
      ></EzCheckbox>
    </div>
  </th>
</template>

<style lang="scss" scoped>
.th-selection-cell {
  position: sticky;
  top: 0;
  height: 50px;
  left: 0;
  z-index: 3;
}
</style>
