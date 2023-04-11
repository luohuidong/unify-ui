<script setup lang="ts">
import { ref } from "vue";

import { EzTable } from "@luohuidong/easy-ui";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

type TableType = InstanceType<typeof EzTable>;

const sort = ref<TableType["sort"]>(null);

const columns: TableType["$props"]["columns"] = [
  {
    title: "id",
    key: "id",
    sortable: true,
    sortType: ["descending"],
  },
  {
    title: "Title",
    key: "title",
    sortable: true,
    sortType: ["ascending", "descending"],
    width: 200,
  },
  {
    title: "Author",
    key: "author",
    sortable: true,
    sortType: ["ascending"],
    width: 200,
  },
];

function handleSortChange(sort: TableType["sort"]) {
  console.log(sort);
}
</script>

<template>
  <EzTable
    v-model:sort="sort"
    row-key="id"
    :columns="columns"
    :data="data"
    @sort-change="handleSortChange"
  >
    <template #userId="{ record }"> 用户标识：{{ record.userId }} </template>
  </EzTable>
</template>

<style scoped></style>
