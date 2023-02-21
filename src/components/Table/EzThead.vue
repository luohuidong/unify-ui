<script setup lang="ts">
import { useInject } from "./useInject";
import { useGetColumn } from "./useGetColumn";

const { rootProps } = useInject();
const { rightFixedColumns, leftFixedColumns, normalColumns } = useGetColumn(rootProps.columns);
</script>

<template></template>

<style lang="scss" module>
.thead {
  background: #f5f6fa;
  color: #666666;
}

.th {
  position: sticky;
  top: 0;

  white-space: nowrap;
  padding: 16px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #f0f0f0;
}
</style>
