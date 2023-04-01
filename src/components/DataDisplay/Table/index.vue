<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzTable",
});
</script>

<script setup lang="ts">
import { useSlots, provide, ref } from "vue";

import * as injectKeys from "./injectKeys";
import {
  useGetColumnsData,
  useShowShadow,
  useState,
  useWatchProps,
  useGetColumnCount,
  useGetSlotKey,
} from "./composable";
import type { Key, Record, Column } from "./types";

import EzThead from "./EzThead.vue";
import EzTbodyRow from "./EzTbodyRow.vue";
import EzTbodyEmptyRow from "./EzTbodyEmptyRow.vue";

const props = defineProps<{
  /** 数据唯一索引 */
  rowKey: Key;
  data: Record[];
  columns: Column[];
  rowExpand?: {
    expandCondition: (record: Record) => boolean;
    showExpandRowDefault?: boolean;
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
  tbodyRowClass?: string;
}>();
provide(injectKeys.rootPropsKey, props);

const emit = defineEmits<{
  (e: "update:selectedRowKeys", selectedRowKeys: Set<Key>): void;
  /** emit when select/deselect one row */
  (e: "select", params: { selected: boolean; rowKey: Key; record: Record }): void;
  /** emit when select/deselect all rows */
  (e: "selectAll", params: { selected: boolean; rowKeys: Key[]; records: Record[] }): void;
}>();
provide(injectKeys.rootEmitKey, emit);

const { state } = useState(props);
useWatchProps(props, state);
const columnCount = useGetColumnCount(props);
useGetColumnsData(props);

const slots = useSlots();
useGetSlotKey(slots);

const containerRef = ref<HTMLDivElement>();
const tableRef = ref<HTMLTableElement>();
useShowShadow(containerRef, tableRef);
</script>

<template>
  <div ref="containerRef" :class="$style.container">
    <table ref="tableRef" :class="$style.table">
      <EzThead>
        <template #theadCell="{ columnKey }">
          <slot :name="columnKey"></slot>
        </template>
      </EzThead>

      <tbody>
        <!-- 渲染 data 数据 -->
        <template v-if="props.data.length > 0">
          <EzTbodyRow
            v-for="record in props.data"
            :key="(record[props.rowKey] as string)"
            :record="record"
          >
            <template #rowCell="{ columnKey }">
              <slot :name="columnKey" :record="record"></slot>
            </template>

            <template #rowExpand>
              <slot name="rowExpand" :record="record"></slot>
            </template>
          </EzTbodyRow>
        </template>
        <template v-else>
          <EzTbodyEmptyRow>
            <slot name="empty"></slot>
          </EzTbodyEmptyRow>
        </template>
      </tbody>

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
