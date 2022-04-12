<route lang="yaml">
name: Table
meta:
  title: 表格 (Table)
</route>

<script setup lang="ts">
import CaseVNodeTable from "./CaseVNodeTable.vue";
import CaseSlotTable from "./CaseSlotTable.vue";
</script>

<template>
  <section>
    <h1>使用 VNode 方式的表格</h1>
    <CaseVNodeTable></CaseVNodeTable>
  </section>

  <section>
    <h1>使用 slot 方式的表格</h1>
    <CaseSlotTable></CaseSlotTable>
  </section>
</template>

<style scoped></style>
