<script setup lang="ts">
import { ref } from "vue";

import UniTable from "../index.vue";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

type TableType = InstanceType<typeof UniTable>;

const sort = ref<TableType["sort"]>(null);

const columns: TableType["$props"]["columns"] = [
  {
    title: "Title",
    key: "title",
    sortable: true,
    sortType: ["descending"],
    width: 200,
  },
  {
    title: "Author",
    key: "author",
    sortable: true,
    sortType: ["ascending"],
    width: 200,
  },
  {
    title: "Post",
    key: "post",
    sortable: true,
    sortType: ["ascending", "descending"],
  },
];

function handleSortChange(sort: TableType["sort"]) {
  console.log(sort);
}
</script>

<template>
  <UniTable
    v-model:sort="sort"
    row-key="id"
    :columns="columns"
    :data="data"
    @sort-change="handleSortChange"
  >
    <template #userId="{ record }"> 用户标识：{{ record.userId }} </template>
  </UniTable>
</template>

<style scoped></style>
