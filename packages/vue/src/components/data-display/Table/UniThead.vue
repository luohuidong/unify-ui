<script setup lang="ts">
import { useInject } from "./composables";

import UniTheadSelectionCell from "./UniTheadSelectionCell.vue";
import UniTheadSort from "./UniTheadSort.vue";
import UniTheadExpandColumnCell from "./UniTheadExpandColumnCell.vue";
import UniTheadNormalCell from "./UniTheadNormalCell.vue";

const {
  columnsInfo: { columnsData },
  tableProps,
  rootSlotKeys,
  tableState,
} = useInject();
</script>

<template>
  <thead>
    <tr>
      <template v-if="tableState.showExpandToggleCell">
        <UniTheadExpandColumnCell></UniTheadExpandColumnCell>
      </template>

      <template v-if="tableProps.selection?.type">
        <UniTheadSelectionCell></UniTheadSelectionCell>
      </template>

      <UniTheadNormalCell v-for="col in columnsData" :key="col.key" :col="col">
        <UniTheadSort v-if="col.sortable" :column-data="col"></UniTheadSort>

        <template v-if="rootSlotKeys.has(`header-${col.key}`)">
          <slot name="theadCell" :column-key="`header-${col.key}`"></slot>
        </template>
        <template v-else>
          <span>{{ col.title }}</span>
        </template>
      </UniTheadNormalCell>
    </tr>
  </thead>
</template>
