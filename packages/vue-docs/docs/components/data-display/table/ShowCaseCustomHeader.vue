<script setup lang="ts">
import { UniTable } from "unify-ui";
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
  },
];
</script>

<template>
  <UniTable row-key="id" :columns="columns" :data="data">
    <template #title="{ record }"> title: {{ record.userId }} </template>
    <template #header-title>
      <span class="customer-header-text">This is custom title!</span>
    </template>
  </UniTable>
</template>

<style scoped>
.customer-header-text {
  color: red;
}
</style>
