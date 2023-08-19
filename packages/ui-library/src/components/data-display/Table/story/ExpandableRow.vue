<script setup lang="ts">
import UniTable from "../index.vue";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: InstanceType<typeof UniTable>["$props"]["columns"] = [
  {
    title: "Title",
    key: "title",
    width: 120,
  },
  {
    title: "Author",
    key: "author",
    width: 200,
  },
  {
    title: "Post",
    key: "post",
    width: 300,
  },
  {
    title: "Actions",
    key: "actions",
    width: 150,
  },
];

const rowExpand: InstanceType<typeof UniTable>["$props"]["rowExpand"] = {
  expandCondition: (row) => row.description as boolean,
  showExpandRowDefault: true,
};
</script>

<template>
  <UniTable class="container" row-key="id" :columns="columns" :data="data" :row-expand="rowExpand">
    <template #userId="{ record }"> 用户标识：{{ record.userId }} </template>

    <template #rowExpand="{ record }">
      {{ `Expand row： ${record.description}` }}
    </template>
  </UniTable>
</template>

<style scoped>
.container {
  width: 100%;
  height: 500px;
}
</style>
