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
    <td :colspan="columnCount" :class="$style['expand-row__cell']">
      <slot></slot>
    </td>
  </tr>
</template>

<style lang="scss" module>
.expand-row__cell {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
  line-height: 20px;
  color: rgb(75 85 99);
  background-color: white;
}
</style>
