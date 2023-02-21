<script setup lang="ts">
import { useInject } from "./useInject";

const { columnsData } = useInject();
</script>

<template>
  <thead :class="$style.tableHead">
    <tr>
      <th
        v-for="col in columnsData"
        :key="col.key"
        scoop="column"
        :style="{
          width: col.width && `${col.width}px`,
          left: col.left && `${col.left}px`,
          right: col.right && `${col.right}px`,
          zIndex: col.fixed ? 2 : 1,
        }"
      >
        {{ col.title }}
      </th>
    </tr>
  </thead>
</template>

<style lang="scss" module>
.tableHead {
  > tr > th {
    position: sticky;
    top: 0;

    white-space: nowrap;
    padding: 16px;
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    border-bottom: 1px solid #f0f0f0;
    background: #f5f6fa;
    color: #666666;
  }
}
</style>
