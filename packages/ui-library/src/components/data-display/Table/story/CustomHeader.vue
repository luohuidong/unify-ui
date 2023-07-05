<script setup lang="ts">
import UniTable from "../index.vue";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: InstanceType<typeof UniTable>["$props"]["columns"] = [
  {
    title: "Title",
    key: "title",
    width: 200,
  },
  {
    title: "Author",
    key: "author",
    width: 200,
  },
  {
    title: "post",
    key: "post",
  },
];
</script>

<template>
  <UniTable row-key="id" :columns="columns" :data="data">
    <template #title="{ record }"> title：{{ record.userId }} </template>
    <template #header-title>This is custom title</template>
  </UniTable>
</template>

<style scoped></style>
