<script setup lang="ts">
import EzTable from "../index.vue";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: InstanceType<typeof EzTable>["$props"]["columns"] = [
  {
    title: "标识",
    key: "id",
  },
  {
    title: "用户标识",
    key: "userId",
  },
  {
    title: "标题",
    key: "title",
  },
  {
    title: "是否完成",
    key: "completed",
  },
];

const rowExpand: InstanceType<typeof EzTable>["$props"]["rowExpand"] = {
  expandCondition: (row) => row.completed as boolean,
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
