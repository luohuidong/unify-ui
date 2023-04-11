<script setup lang="ts">
import { EzTable } from "@luohuidong/easy-ui";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: InstanceType<typeof EzTable>["$props"]["columns"] = [
  {
    title: "Title",
    key: "title",
    width: 150,
  },
  {
    title: "Author",
    key: "userId",
  },
];
</script>

<template>
  <EzTable row-key="id" :columns="columns" :data="data">
    <template #userId="{ record }"> Author is {{ record.author }} </template>
  </EzTable>
</template>

<style scoped></style>
