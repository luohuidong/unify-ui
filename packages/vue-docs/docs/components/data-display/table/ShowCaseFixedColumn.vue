<script setup lang="ts">
import { UniTable } from "unify-ui";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: InstanceType<typeof UniTable>["$props"]["columns"] = [
  {
    title: "Title",
    key: "title",
    fixed: "left",
    width: 150,
  },
  {
    title: "Author",
    key: "author",
    width: 150,
  },
  {
    title: "Post",
    key: "post",
    width: 600,
  },
  {
    title: "Actions",
    key: "actions",
    fixed: "right",
    width: 100,
  },
];
</script>

<template>
  <UniTable row-key="id" class="container" :columns="columns" :data="data">
    <template #actions>Delete</template>
  </UniTable>
</template>

<style scoped>
.container {
  width: 100%;
  height: 500px;
}
</style>
