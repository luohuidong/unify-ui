<script setup lang="ts">
import { EzTable } from "@easy-ui-team/easy-ui";
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
  },
];
</script>

<template>
  <EzTable row-key="id" :columns="columns" :data="data">
    <template #author="{ record }"> Author is {{ record.author }} </template>
  </EzTable>
</template>

<style scoped></style>
