<script setup lang="ts">
import { EzTable } from "@easy-ui-team/easy-ui";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: InstanceType<typeof EzTable>["$props"]["columns"] = [
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

const rowExpand: InstanceType<typeof EzTable>["$props"]["rowExpand"] = {
  expandCondition: (row) => row.description as boolean,
  showExpandRowDefault: false,
};
</script>

<template>
  <EzTable row-key="id" :columns="columns" :data="data" :row-expand="rowExpand">
    <template #rowExpand="{ record }">
      {{ `Expand row: ${record.description}` }}
    </template>
  </EzTable>
</template>

<style scoped></style>
