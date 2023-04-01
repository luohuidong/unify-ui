<script setup lang="ts">
import { useInject } from "./composable";

const { columnCount } = useInject();
</script>

<template>
  <tr>
    <td :class="$style['empty-row__cell']" :colspan="columnCount">
      <slot> 暂无数据 </slot>
    </td>
  </tr>
</template>

<style lang="scss" module>
.empty-row__cell {
  height: 50px;
  text-align: center;
  font-size: 12px;
  color: #666666;
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
}
</style>
