<script setup lang="ts">
import { type VNode, computed } from "vue";

import TableCellRender from "./VmTableCellRender";

const props = defineProps<{
  uniqueKey: string;
  columns: {
    key: string;
    title: string;
    render?: (rowData: Record<string, unknown>) => VNode | null;
  }[];
  rowExpand?: {
    expandCondition: (rowData: Record<string, unknown>) => boolean;
    expandRowRender: (rowData: Record<string, unknown>) => VNode | null;
  };
  data: Record<string, unknown>[];
}>();

const columnCount = computed(() => {
  return props.columns.length;
});
</script>

<template>
  <table :class="$style.table">
    <thead :class="$style.thead">
      <tr>
        <th v-for="col in columns" :key="col.key">{{ col.title }}</th>
      </tr>
    </thead>

    <tbody :class="$style.tbody">
      <!-- 渲染 data 数据 -->
      <template v-for="rowData in data" :key="(rowData[uniqueKey] as string)">
        <!-- 渲染普通行 -->
        <tr>
          <template v-for="col in columns" :key="col.key">
            <td v-if="col.render">
              <TableCellRender
                :v-node="() => (col.render && col.render(rowData)) || null"
              />
            </td>

            <td v-else>
              {{ rowData[col.key] }}
            </td>
          </template>
        </tr>

        <!-- 渲染扩展行 -->
        <tr v-if="rowExpand && rowExpand.expandCondition(rowData)">
          <td :colspan="columnCount">
            <TableCellRender
              :v-node="
                () => (rowExpand && rowExpand.expandRowRender(rowData)) || null
              "
            ></TableCellRender>
          </td>
        </tr>
      </template>
    </tbody>
  </table>

  <slot></slot>
</template>

<style lang="scss" module>
.table {
  width: 100%;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-collapse: collapse;
}

.thead {
  th {
    text-align: left;
    font-size: 14px;
    font-weight: 500;
  }
}

.tbody {
  td {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
