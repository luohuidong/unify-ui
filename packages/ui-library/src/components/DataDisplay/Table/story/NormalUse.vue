<script setup lang="ts">
import EzTable from "../index.vue";
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
    width: 150,
  },
  {
    title: "Post",
    key: "post",
  },
];
</script>

<template>
  <EzTable row-key="id" :columns="columns" :data="data">
    <template #userId="{ record }"> Author is {{ record.author }} </template>
  </EzTable>
</template>

<style scoped></style>
