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

const rowExpand: InstanceType<typeof UniTable>["$props"]["rowExpand"] = {
  expandCondition: (row) => row.description as boolean,
  showExpandRowDefault: false,
};
</script>

<template>
  <UniTable row-key="id" :columns="columns" :data="data" :row-expand="rowExpand">
    <template #rowExpand="{ record }">
      {{ `Expand row: ${record.description}` }}
    </template>
  </UniTable>
</template>
