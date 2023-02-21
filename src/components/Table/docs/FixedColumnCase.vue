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
  },
  {
    title: "标题",
    key: "title",
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
  <div class="container">
    <EzTable row-key="id" :columns="columns" :data="data">
      <template #userId="{ record }"> 用户标识：{{ record.userId }} </template>
    </EzTable>
  </div>
</template>

<style scoped>
.container {
  width: 500px;
}
</style>
