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

import EzThead from "./EzThead.vue";
import EzTbody from "./EzTbody.vue";

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
provide(injectKeys.columnCount, columnCount);

const slots = useSlots();
const slotKeys = ref(new Set<string>());
provide(injectKeys.slotKeysKey, slotKeys);
watchEffect(() => {
  slotKeys.value.clear();
  Reflect.ownKeys(slots).forEach((key) => slotKeys.value.add(key as string));
});

useGetColumnsData(props.columns);
</script>

<template>
  <div :class="$style.container">
    <table :class="$style.table">
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
