<script setup lang="ts">
import { useInject } from "./composables";
import type { Record } from "./types";

const {
  columnsInfo: { columnCount },
} = useInject();

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
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
  line-height: 20px;
  color: rgb(75 85 99);
  background-color: white;
}
</style>
