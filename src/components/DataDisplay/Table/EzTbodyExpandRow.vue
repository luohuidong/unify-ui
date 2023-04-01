<script setup lang="ts">
import { useInject, useGetColumnCount } from "./composable";
import type { Record } from "./types";

const { rootProps, columnCount } = useInject();

defineProps<{
  record: Record;
}>();
</script>

<template>
  <tr>
    <td :colspan="columnCount" class="expand-row__cell" :style="{ padding: '16px' }">
      <slot></slot>
    </td>
  </tr>
</template>

<style lang="scss" scoped>
.expand-row__cell {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
  background: rgba(0, 0, 0, 0.02);
}
</style>
