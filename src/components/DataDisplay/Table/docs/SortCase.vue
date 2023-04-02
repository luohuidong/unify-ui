<script setup lang="ts">
import { ref } from "vue";

import EzTable from "../index.vue";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

type TableType = InstanceType<typeof EzTable>;

const sort = ref<TableType["sort"]>(null);

const columns: TableType["$props"]["columns"] = [
  {
    title: "标识",
    key: "id",
    sortable: true,
    sortType: ["ascending", "descending"],
  },
  {
    title: "用户标识",
    key: "userId",
    sortable: true,
    sortType: ["ascending"],
  },
  {
    title: "标题",
    key: "title",
    sortable: true,
    sortType: ["ascending", "descending"],
  },
  {
    title: "是否完成",
    key: "completed",
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
