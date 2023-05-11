<script setup lang="ts">
import UniTable from "../index.vue";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: InstanceType<typeof UniTable>["$props"]["columns"] = [
  {
    title: "Title",
    key: "title",
    width: 150,
  },
  {
    title: "Author",
    key: "userId",
    width: 250,
  },
  {
    title: "Post",
    key: "post",
  },
];
</script>

<template>
  <UniTable row-key="id" :columns="columns" :data="data">
    <template #userId="{ record }"> Author is {{ record.author }} </template>
  </UniTable>
</template>

<style scoped></style>
