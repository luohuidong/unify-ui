<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzTable",
});
</script>

<script setup lang="ts">
import { useSlots, provide, ref } from "vue";
import { EzEmpty } from "@/components";

import * as injectKeys from "./injectKeys";
import {
  useGetColumnsInfo,
  useShowShadow,
  useState,
  useWatchProps,
  useGetColumnCount,
  useGetSlotKey,
} from "./composable";
import type { Key, Record, Column, SortType } from "./types";

import EzColGroup from "./EzColGroup.vue";
import EzThead from "./EzThead.vue";
import EzTbodyRow from "./EzTbodyRow.vue";
import EzTbodyEmptyRow from "./EzTbodyEmptyRow.vue";

const props = defineProps<{
  rowKey: Key;
  data: Record[];
  columns: Column[];
  rowExpand?: {
    expandCondition: (record: Record) => boolean;
    showExpandRowDefault?: boolean;
  };
  sort?: {
    columnKey: Key;
    order: SortType;
  } | null;
  showFoot?: boolean;
  selection?: {
    type: "multiple" | "single";
    disabledCondition?: (record: Record) => boolean;
  };
  selectedRowKeys?: Set<Key>;
  tbodyRowClass?: string | ((record: Record) => string);
  tbodyCellClass?: string;
}>();
provide(injectKeys.tablePropsKey, props);

const emit = defineEmits<{
  (e: "update:selectedRowKeys", selectedRowKeys: Set<Key>): void;
  (e: "update:sort", params: { columnKey: Key; order: SortType } | null): void;
  /** Emits the "select" event when a row is selected or deselected. */
  (e: "select", params: { selected: boolean; rowKey: Key; record: Record }): void;
  /** Emits the "selectAll" event when all rows are selected or deselected. */
  (e: "selectAll", params: { selected: boolean; rowKeys: Key[]; records: Record[] }): void;
  /** Emits the "sortChange" event when the column sort order changes */
  (e: "sortChange", params: { columnKey: Key; order: SortType } | null): void;
}>();
provide(injectKeys.tableEmitsKey, emit);

const { state } = useState(props);
useWatchProps(props, state);
const columnCount = useGetColumnCount(props);
const { columnsData } = useGetColumnsInfo(props, state);

const slots = useSlots();
useGetSlotKey(slots);

const containerRef = ref<HTMLDivElement>();
const tableRef = ref<HTMLTableElement>();
provide(injectKeys.containerRefKey, containerRef);
provide(injectKeys.tableRefKey, tableRef);
useShowShadow({ containerRef, tableRef, columnsData, tableProps: props });
</script>

<template>
  <div ref="containerRef" class="scroll-container">
    <table ref="tableRef" class="table">
      <EzColGroup></EzColGroup>

      <EzThead>
        <template #theadCell="{ columnKey }">
          <slot :name="columnKey"></slot>
        </template>
      </EzThead>

      <tbody>
        <!-- render the data -->
        <template v-if="props.data.length > 0">
          <EzTbodyRow
            v-for="(record, index) in props.data"
            :key="(record[props.rowKey] as string)"
            :record="record"
          >
            <template #rowCell="{ columnKey }">
              <slot :name="columnKey" :record="record" :index="index"></slot>
            </template>

            <template #rowExpand>
              <slot name="rowExpand" :record="record" :index="index"></slot>
            </template>
          </EzTbodyRow>
        </template>
        <template v-else>
          <tr>
            <td :colspan="columnCount" class="empty-row__cell">
              <slot name="empty">
                <EzEmpty></EzEmpty>
              </slot>
            </td>
          </tr>
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

<style lang="scss" scoped>
.scroll-container {
  overflow: auto;
}

.table {
  width: 100%;
  background: white;
  border-collapse: collapse;
  table-layout: fixed;
}

.empty-row__cell {
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
}
</style>
