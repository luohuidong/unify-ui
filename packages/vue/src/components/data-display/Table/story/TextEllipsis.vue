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
    key: "author",
    width: 150,
    ellipsis: true,
  },
  {
    title: "Post",
    key: "post",
    ellipsis: true,
  },
];
</script>

<template>
  <UniTable row-key="id" :columns="columns" :data="data"> </UniTable>
</template>

<style scoped></style>
