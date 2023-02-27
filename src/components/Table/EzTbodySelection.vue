<script setup lang="ts">
import { EzCheckbox } from "@/components";
import { useInject } from "./useInject";
import type { Record } from "./types";

defineProps<{
  record: Record;
}>();

const { rootProps, rootState, rootEmit } = useInject();

function handleCheckboxChange(record: Record, checked: boolean) {
  checked
    ? rootState.selectedRowKeys.add(record[rootProps.rowKey])
    : rootState.selectedRowKeys.delete(record[rootProps.rowKey]);

  rootEmit("update:selectedRowKeys", rootState.selectedRowKeys);
  rootEmit("select", { record, selected: checked });
}

function handleRadioClick(record: Record) {
  rootState.selectedRowKeys.clear();
  rootState.selectedRowKeys.add(record[rootProps.rowKey]);

  rootEmit("update:selectedRowKeys", rootState.selectedRowKeys);
  rootEmit("select", { record, selected: true });
}
</script>

<template>
  <td :class="$style.selectionCell">
    <div v-if="rootProps.selection?.type === 'multiple'">
      <EzCheckbox
        :model-value="rootState.selectedRowKeys.has(record[rootProps.rowKey])"
        :disabled="rootProps.selection?.disabledCondition?.(record)"
        @change="(checked) => handleCheckboxChange(record, checked)"
      ></EzCheckbox>
    </div>
    <div v-else>
      <input
        type="radio"
        :checked="rootState.selectedRowKeys.has(record[rootProps.rowKey])"
        :disabled="rootProps.selection?.disabledCondition?.(record)"
        @change="() => handleRadioClick(record)"
      />
    </div>
  </td>
</template>

<style lang="scss" module>
.selectionCell {
  position: sticky;
  top: 0;
  height: 50px;
  left: 0;
  z-index: 1;

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
  }
}
</style>
