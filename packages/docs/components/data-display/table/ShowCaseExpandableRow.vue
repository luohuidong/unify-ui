<script setup lang="ts">
import { EzTable } from "@luohuidong/easy-ui";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: InstanceType<typeof EzTable>["$props"]["columns"] = [
  {
    title: "Title",
    key: "title",
    width: 120,
  },
  {
    title: "Author",
    key: "author",
  },
];

const rowExpand: InstanceType<typeof EzTable>["$props"]["rowExpand"] = {
  expandCondition: (row) => row.description as boolean,
  showExpandRowDefault: true,
};
</script>

<template>
  <EzTable row-key="id" :columns="columns" :data="data" :row-expand="rowExpand">
    <template #userId="{ record }"> 用户标识：{{ record.userId }} </template>

    <template #rowExpand="{ record }">
      {{ `Expand row： ${record.description}` }}
    </template>
  </EzTable>
</template>

<style scoped></style>
