<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniTable",
});
</script>

<script setup lang="ts">
import { useSlots, provide, ref } from "vue";
import UniEmpty from "../Empty/index.vue";

import * as injectKeys from "./injectKeys";
import {
  useGetColumnsInfo,
  useShowShadow,
  useState,
  useGetColumnCount,
  useGetSlotKey,
  useWatchData,
} from "./composable";
import type { Key, Record, TableProps, TableEmits } from "./types";

import UniColGroup from "./UniColGroup.vue";
import UniThead from "./UniThead.vue";
import UniTbodyRow from "./UniTbodyRow.vue";

const props = withDefaults(defineProps<TableProps>(), {
  selectedRowKeys: () => new Set<Key>(),
});
provide(injectKeys.tablePropsKey, props);

const emit = defineEmits<TableEmits>();
provide(injectKeys.tableEmitsKey, emit);

useWatchData(props, emit);

const { state } = useState(props);
const columnCount = useGetColumnCount(props, state);
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
      <UniColGroup></UniColGroup>

      <UniThead>
        <template #theadCell="{ columnKey }">
          <slot :name="columnKey"></slot>
        </template>
      </UniThead>

      <tbody>
        <!-- render the data -->
        <template v-if="props.data.length > 0">
          <UniTbodyRow
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
          </UniTbodyRow>
        </template>
        <template v-else>
          <tr>
            <td :colspan="columnCount" class="empty-row__cell">
              <slot name="empty">
                <UniEmpty></UniEmpty>
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
