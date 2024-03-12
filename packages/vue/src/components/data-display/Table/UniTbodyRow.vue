<script setup lang="ts">
import { reactive } from "vue";

import { useInject } from "./composables";
import type { Record } from "./types";

import UniTbodyExpandRow from "./UniTbodyExpandRow.vue";
import UniTbodyExpandToggleCell from "./UniTbodyExpandToggleCell.vue";
import UniTbodySelectionCell from "./UniTbodySelectionCell.vue";
import UniTbodyNormalCell from "./UniTbodyNormalCell.vue";

defineProps<{
  record: Record;
}>();

const {
  tableProps,
  columnsInfo: { columnsData },
  rootSlotKeys,
  tableState,
} = useInject();

const state = reactive({
  showExpandRow: tableProps.rowExpand?.showExpandRowDefault || false,
});

function toggleExpandRow() {
  state.showExpandRow = !state.showExpandRow;
}
</script>

<template>
  <!-- normal row -->
  <tr :class="[$style['normal-row'], tableProps.tbodyRowClass]">
    <!-- expand column cell -->
    <UniTbodyExpandToggleCell
      v-if="tableState.showExpandToggleCell"
      :record="record"
      :show-expand-row="state.showExpandRow"
      @icon-click="toggleExpandRow"
    />

    <!-- selection column cell -->
    <UniTbodySelectionCell v-if="tableProps.selection?.type" :record="record" />

    <UniTbodyNormalCell v-for="col in columnsData" :key="col.key" :col="col">
      <template v-if="rootSlotKeys.has(col.key)">
        <slot name="rowCell" :column-key="col.key"></slot>
      </template>

      <template v-else>
        <span :title="col.ellipsis && record[col.key]">{{ record[col.key] }}</span>
      </template>
    </UniTbodyNormalCell>
  </tr>

  <!-- expand row -->
  <UniTbodyExpandRow
    v-if="state.showExpandRow && tableProps.rowExpand?.expandCondition(record)"
    :record="record"
  >
    <slot name="rowExpand"></slot>
  </UniTbodyExpandRow>
</template>

<style lang="scss" module>
.normal-row {
  text-align: left;
  font-size: 14px;
  line-height: 16px;
  color: rgb(75 85 99);
  background-color: white;
  border-top: 1px solid rgb(229 231 235);
}
</style>
