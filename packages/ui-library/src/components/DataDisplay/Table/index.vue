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
provide(injectKeys.rootPropsKey, props);

const emit = defineEmits<{
  (e: "update:selectedRowKeys", selectedRowKeys: Set<Key>): void;
  /** emit when select/deselect one row */
  (e: "select", params: { selected: boolean; rowKey: Key; record: Record }): void;
  /** emit when select/deselect all rows */
  (e: "selectAll", params: { selected: boolean; rowKeys: Key[]; records: Record[] }): void;
  /** emit when click sortable column table header cell */
  (e: "update:sort", params: { columnKey: Key; order: SortType } | null): void;
  /** emit when click sortable column table header cell */
  (e: "sortChange", params: { columnKey: Key; order: SortType } | null): void;
}>();
provide(injectKeys.rootEmitKey, emit);

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
useShowShadow({ containerRef, tableRef, columnsData, rootProps: props });
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
        <!-- 渲染 data 数据 -->
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
</style>
