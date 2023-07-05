<script setup lang="ts">
import { useInject } from "./composables";
import { expandColumnWidth, selectionColumnWidth } from "./constant";

const {
  tableProps,
  columnsInfo: { columnsData },
  tableState,
} = useInject();
</script>

<template>
  <colgroup>
    <template v-if="tableState.showExpandToggleCell">
      <col :style="{ width: `${expandColumnWidth}px` }" class="column" />
    </template>

    <template v-if="tableProps.selection?.type">
      <col :style="{ width: `${selectionColumnWidth}px` }" class="column" />
    </template>

    <col
      v-for="col in columnsData"
      :key="col.key"
      :style="{
        width: col.width ? `${col.width}px` : undefined,
        minWidth: col.width ? undefined : `${col.minWidth || 200}px`,
      }"
      class="column"
    />
  </colgroup>
</template>

<style lang="scss" scoped>
.column {
  box-sizing: border-box;
}
</style>
