<script setup lang="ts">
import UniTable from "../index.vue";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: InstanceType<typeof UniTable>["$props"]["columns"] = [
  {
    title: "Title",
    key: "title",
    fixed: "left",
    width: 100,
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
    <template #userId="{ record }"> 用户标识：{{ record.userId }} </template>
    <template #actions>删除</template>
  </UniTable>
</template>

<style scoped>
.container {
  width: 100%;
  height: 500px;
}
</style>
