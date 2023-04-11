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
  <EzTable row-key="id" :columns="columns" :data="data"> </EzTable>
</template>

<style scoped></style>
