<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzTable",
});
</script>

<script setup lang="ts">
import { computed, useSlots, provide, ref, watchEffect } from "vue";

import * as injectKeys from "./injectKeys";
import { useGetColumnsData } from "./useGetColumn";
import { useShowShadow } from "./useShowShadow";
import type { Key, Record, Column } from "./types";
import { useState } from "./useState";

import EzThead from "./EzThead.vue";
import EzTbody from "./EzTbody.vue";

const props = defineProps<{
  /** 数据唯一索引 */
  rowKey: Key;
  data: Record[];
  columns: Column[];
  rowExpand?: {
    expandCondition: (record: Record) => boolean;
  };
  sort?: {
    columnKey: Key;
    order: "ascending" | "descending";
  };
  showFoot?: boolean;

  selection?: {
    type: "multiple" | "single";
    disabledCondition?: (record: Record) => boolean;
  };
  selectedRowKeys?: Set<Key>;
}>();
provide(injectKeys.rootPropsKey, props);

const emit = defineEmits<{
  (e: "update:selectedRowKeys", selectedRowKeys: Set<Key>): void;
  /** emit when select/deselect one row */
  (e: "select", params: { selected: boolean; record: Record }): void;
  /** emit when select/deselect all rows */
  (e: "selectAll", params: { selected: boolean }): void;
}>();
provide(injectKeys.rootEmitKey, emit);

useState();

const columnCount = computed(() => {
  return props.columns.length;
});
provide(injectKeys.columnCount, columnCount);

const slots = useSlots();
const slotKeys = ref(new Set<string>());
provide(injectKeys.slotKeysKey, slotKeys);
watchEffect(() => {
  slotKeys.value.clear();
  Reflect.ownKeys(slots).forEach((key) => slotKeys.value.add(key as string));
});

useGetColumnsData(props);

const containerRef = ref<HTMLDivElement>();
const tableRef = ref<HTMLTableElement>();
useShowShadow(containerRef, tableRef);
</script>

<template>
  <div ref="containerRef" :class="$style.container">
    <table ref="tableRef" :class="$style.table">
      <EzThead></EzThead>

      <EzTbody>
        <template #rowCell="{ columnKey, record }">
          <slot :name="columnKey" :record="record"></slot>
        </template>

        <template #rowExpand="{ record }">
          <slot name="rowExpand" :record="record"></slot>
        </template>
      </EzTbody>

      <tfoot v-if="showFoot">
        <tr>
          <td :colspan="columnCount">
            <slot name="foot"> </slot>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style lang="scss" module>
.container {
  overflow: auto;
}

.table {
  width: 100%;
  background: white;
  border-collapse: collapse;
  table-layout: fixed;
}
</style>
