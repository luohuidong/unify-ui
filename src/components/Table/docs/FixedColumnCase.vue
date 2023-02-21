<script setup lang="ts">
import { EzTable } from "@/components";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: InstanceType<typeof EzTable>["$props"]["columns"] = [
  {
    title: "标识",
    key: "id",
    fixed: "left",
    width: 100,
  },
  {
    title: "用户标识",
    key: "userId",
    width: 100,
  },
  {
    title: "标题",
    key: "title",
    width: 100,
  },
  {
    title: "是否完成",
    key: "completed",
  },
  {
    title: "操作",
    key: "actions",
    fixed: "right",
    width: 100,
  },
];
</script>

<template>
  <EzTable row-key="id" class="container" :columns="columns" :data="data">
    <template #userId="{ record }"> 用户标识：{{ record.userId }} </template>
    <template #actions>213412</template>
  </EzTable>
</template>

<style scoped>
.container {
  width: 400px;
  height: 500px;
}
</style>
