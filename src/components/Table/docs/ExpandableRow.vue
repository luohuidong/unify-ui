<script setup lang="ts">
import EzTable from "../index.vue";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: InstanceType<typeof EzTable>["$props"]["columns"] = [
  {
    title: "标识",
    key: "id",
    fixed: "left",
    width: 120,
  },
  {
    title: "用户标识",
    key: "userId",
    width: 200,
  },
  {
    title: "标题",
    key: "title",
    width: 200,
  },
  {
    title: "是否完成",
    key: "completed",
    width: 200,
  },
];

const rowExpand: InstanceType<typeof EzTable>["$props"]["rowExpand"] = {
  expandCondition: (row) => row.completed as boolean,
  showExpandRowDefault: true,
};
</script>

<template>
  <EzTable row-key="id" :columns="columns" :data="data" :row-expand="rowExpand">
    <template #userId="{ record }"> 用户标识：{{ record.userId }} </template>

    <template #rowExpand="{ record }">
      {{ `【展开行】标题： ${record.title}，完成状态： ${record.completed}` }}
    </template>
  </EzTable>
</template>

<style scoped></style>
