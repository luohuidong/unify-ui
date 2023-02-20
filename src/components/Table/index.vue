<script setup lang="ts">
import { computed, useSlots } from "vue";

import EzThead from "./EzThead.vue";
import EzTbody from "./EzTbody.vue";
import EzTfoot from "./EzTfoot.vue";
import EzTr from "./EzTr.vue";
import EzTh from "./EzTh.vue";
import EzTd from "./EzTd.vue";

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

const columnCount = computed(() => {
  return props.columns.length;
});

const slots = useSlots();
const slotKeys = new Set<string | Symbol>();
Reflect.ownKeys(slots).forEach((key) => slotKeys.add(key));
</script>

<template>
  <table :class="$style.table">
    <EzThead>
      <EzTr>
        <EzTh v-for="col in columns" :key="col.key" scoop="column">{{ col.title }}</EzTh>
      </EzTr>
    </EzThead>

    <EzTbody :class="$style.tbody">
      <!-- 渲染 data 数据 -->
      <template v-for="record in data" :key="(record[rowKey] as string)">
        <!-- 渲染普通行 -->
        <EzTr>
          <template v-for="col in columns" :key="col.key">
            <EzTd v-if="slotKeys.has(col.key)">
              <slot :name="col.key" :record="record"></slot>
            </EzTd>

            <EzTd v-else>
              {{ record[col.key] }}
            </EzTd>
          </template>
        </EzTr>

        <!-- 渲染扩展行 -->
        <EzTr v-if="rowExpand && rowExpand.expandCondition(record)">
          <EzTd :colspan="columnCount">
            <slot name="rowExpand" :record="record"></slot>
          </EzTd>
        </EzTr>
      </template>
    </EzTbody>

    <EzTfoot v-if="showFoot">
      <EzTr>
        <EzTd :colspan="columnCount">
          <slot name="foot"> </slot>
        </EzTd>
      </EzTr>
    </EzTfoot>
  </table>

  <slot></slot>
</template>

<style lang="scss" module>
.table {
  width: 100%;
  background: white;
  border-collapse: collapse;
}
</style>
