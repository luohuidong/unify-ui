<script setup lang="ts">
import { useInject } from "./composable";
import { expandColumnWidth, selectionColumnWidth } from "./constant";

const { rootProps, columnsData } = useInject();
</script>

<template>
  <colgroup>
    <template v-if="rootProps.rowExpand">
      <col :style="{ width: `${expandColumnWidth}px` }" />
    </template>

    <template v-if="rootProps.selection?.type">
      <col :style="{ width: `${selectionColumnWidth}px` }" />
    </template>

    <col
      v-for="col in columnsData"
      :key="col.key"
      :style="{ width: col.width ? `${col.width}px` : '150px' }"
    />
  </colgroup>
</template>

<style lang="scss" scoped></style>
