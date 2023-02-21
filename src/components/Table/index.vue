<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzTable",
});
</script>

<script setup lang="ts">
import { computed, useSlots, provide } from "vue";

import EzThead from "./EzThead.vue";
import * as injectKeys from "./injectKeys";
import { useGetColumn } from "./useGetColumn";

type Record = any;

const props = defineProps<{
  /** 数据唯一索引 */
  rowKey: string;
  data: Record[];
  columns: {
    key: string;
    title: string;
    width?: number;
    fixed?: "left" | "right";
    sortable?: boolean;
  }[];
  rowExpand?: {
    expandCondition: (Record: Record) => boolean;
  };
  sort?: {
    columnKey: string;
    order: "ascending" | "descending";
  };
  showFoot?: boolean;
}>();
provide(injectKeys.rootPropsKey, props);

const columnCount = computed(() => {
  return props.columns.length;
});

const slots = useSlots();
const slotKeys = new Set<string | Symbol>();
Reflect.ownKeys(slots).forEach((key) => slotKeys.add(key));

const { leftFixedColumns, rightFixedColumns, normalColumns } = useGetColumn(props.columns);
</script>

<template>
  <div :class="$style.container">
    <table :class="$style.table">
      <thead :class="$style.thead">
        <tr>
          <th v-for="col in columns" :key="col.key" scoop="column" :class="$style.th">
            {{ col.title }}
          </th>
        </tr>
      </thead>

      <tbody :class="$style.tableBody">
        <!-- 渲染 data 数据 -->
        <template v-for="record in data" :key="(record[rowKey] as string)">
          <!-- 渲染普通行 -->
          <tr :class="$style.normalRow">
            <td
              v-for="col in leftFixedColumns"
              :key="col.key"
              :style="{ position: 'sticky', left: col.left + 'px', zIndex: 1, background: 'black' }"
            >
              <template v-if="slotKeys.has(col.key)">
                <slot :name="col.key" :record="record"></slot>
              </template>

              <template v-else>
                {{ record[col.key] }}
              </template>
            </td>

            <td v-for="col in normalColumns" :key="col.key">
              <template v-if="slotKeys.has(col.key)">
                <slot :name="col.key" :record="record"></slot>
              </template>

              <template v-else>
                {{ record[col.key] }}
              </template>
            </td>

            <td v-for="col in rightFixedColumns" :key="col.key">
              <template v-if="slotKeys.has(col.key)">
                <slot :name="col.key" :record="record"></slot>
              </template>

              <template v-else>
                {{ record[col.key] }}
              </template>
            </td>
          </tr>

          <!-- 渲染扩展行 -->
          <tr v-if="rowExpand && rowExpand.expandCondition(record)">
            <td :colspan="columnCount">
              <slot name="rowExpand" :record="record"></slot>
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

<style module lang="scss">
.container {
  overflow: auto;
}

.table {
  width: 100%;
  background: white;
  border-collapse: collapse;
  table-layout: fixed;
}

.tableBody {
  .normalRow {
    white-space: nowrap;
    text-align: left;
    font-size: 14px;

    &:hover {
      background-color: #fafbfd;
    }
  }

  tr > td {
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
