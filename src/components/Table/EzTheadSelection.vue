<script setup lang="ts">
import { watchEffect, reactive } from "vue";

import { EzCheckbox } from "@/components";
import { selectionColumnWidth } from "./constant";
import { useInject } from "./composable";
import { SetUtils } from "./utils";
import type { Record, Key } from "./types";

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

function SelectionAllToggle(value: boolean) {
  const rowKeys: Key[] = [];
  const records: Record[] = [];

  rootProps.data.forEach((item) => {
    const rowKey = item[rootProps.rowKey];

    // record must be selectable
    if (!rootProps.selection?.disabledCondition?.(item)) {
      value ? rootState.selectedRowKeys.add(rowKey) : rootState.selectedRowKeys.delete(rowKey);

      rowKeys.push(rowKey);
      records.push(item);
    }
  });

  rootEmit("update:selectedRowKeys", new Set([...rootState.selectedRowKeys]));
  rootEmit("selectAll", { selected: value, rowKeys, records });
}
</script>

<template>
  <th :class="$style.selectionTh" :style="{ width: `${selectionColumnWidth}px` }">
    <div v-if="rootProps.selection?.type === 'multiple'">
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

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
