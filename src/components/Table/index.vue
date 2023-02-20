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

type Record = any;

const props = defineProps<{
  /** 数据唯一索引 */
  rowKey: string;
  data: Record[];
  columns: {
    key: string;
    title: string;
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
</script>

<template>
  <table :class="$style.table">
    <EzThead> </EzThead>

    <tbody :class="$style.tableBody">
      <!-- 渲染 data 数据 -->
      <template v-for="record in data" :key="(record[rowKey] as string)">
        <!-- 渲染普通行 -->
        <tr :class="$style.normalRow">
          <template v-for="col in columns" :key="col.key">
            <td v-if="slotKeys.has(col.key)">
              <slot :name="col.key" :record="record"></slot>
            </td>

            <td v-else>
              {{ record[col.key] }}
            </td>
          </template>
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

  <slot></slot>
</template>

<style module lang="scss">
.table {
  width: 100%;
  background: white;
  border-collapse: collapse;
}

.tableBody {
  .normalRow {
    white-space: nowrap;
    text-align: left;
    font-size: 14px;

    &:hover {
      background-color: #fafbfd;
    }

    > td {
      padding: 16px;
    }
  }
}
</style>
