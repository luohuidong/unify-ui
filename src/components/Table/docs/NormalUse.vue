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
</script>

<template>
  <EzTable row-key="id" :columns="columns" :data="data">
    <template #userId="{ record }"> 用户标识：{{ record.userId }} </template>
  </EzTable>
</template>

<style scoped></style>
