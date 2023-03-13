<script setup lang="ts">
import { watchEffect, reactive } from "vue";

import { EzCheckbox } from "@/components";
import { selectionColumnWidth } from "./constant";
import { useInject } from "./composable";
import { SetUtils } from "./utils";
import type { Record, Key } from "./types";
import commonStyle from "./commonStyle.module.scss";

const { rootProps, rootState, rootEmit } = useInject();

const state = reactive({
  checkboxValue: false,
  indeterminate: false,
});

watchEffect(() => {
  if (rootProps.selection?.type !== "multiple") {
    return;
  }

  const dataKeys = new Set<string | number>();

  if (rootProps.data.length === 0) {
    // set checkbox value to false and indeterminate state to false when there is no table data
    state.checkboxValue = false;
    state.indeterminate = false;
    return;
  }

  rootProps.data.forEach((item) => {
    dataKeys.add(item[rootProps.rowKey]);
  });

  const result = SetUtils.intersection(dataKeys, rootState.selectedRowKeys);
  if (result.size === dataKeys.size) {
    // if all table data is selected, set checkbox value to true, and indeterminate state is false.
    state.checkboxValue = true;
    state.indeterminate = false;
  } else if (result.size < dataKeys.size && result.size > 0) {
    state.checkboxValue = false;
    state.indeterminate = true;
  } else {
    state.checkboxValue = false;
    state.indeterminate = false;
  }
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
  <th :class="$style.selectionTh" :style="{ width: `${selectionColumnWidth}px` }">
    <div
      v-if="rootProps.selection?.type === 'multiple'"
      :class="[
        commonStyle['cell__inner-container'],
        commonStyle['cell__inner-container--horizontal-center'],
      ]"
    >
      <EzCheckbox
        v-model="state.checkboxValue"
        :indeterminate="state.indeterminate"
        @change="SelectionAllToggle"
      ></EzCheckbox>
    </div>
  </th>
</template>

<style lang="scss" module>
.selectionTh {
  position: sticky;
  top: 0;
  height: 50px;
  left: 0;
  z-index: 3;
}
</style>
