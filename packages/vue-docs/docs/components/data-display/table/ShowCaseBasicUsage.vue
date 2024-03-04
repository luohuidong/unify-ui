<script setup lang="ts">
import { UniTable } from "unify-ui";
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
  },
];
</script>

<template>
  <UniTable row-key="id" :columns="columns" :data="data">
    <template #author="{ record }"> Author is {{ record.author }} </template>
  </UniTable>
</template>
