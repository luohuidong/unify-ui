<script setup lang="ts">
import { useInject } from "./useInject";

const { rootProps } = useInject();
</script>

<template>
  <thead :class="$style.thead">
    <tr>
      <th v-for="col in rootProps.columns" :key="col.key" scoop="column" :class="$style.th">
        {{ col.title }}
      </th>
    </tr>
  </thead>
</template>

<style lang="scss" module>
.thead {
  background: #f5f6fa;
  color: #666666;
}

.th {
  white-space: nowrap;
  padding: 16px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
}
</style>
