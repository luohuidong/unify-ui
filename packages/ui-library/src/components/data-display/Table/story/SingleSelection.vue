<script setup lang="ts">
import UniTable from "../index.vue";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: InstanceType<typeof UniTable>["$props"]["columns"] = [
  {
    title: "Title",
    key: "title",
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
];

function disabledCondition(record: any) {
  return record.id === 1;
}
</script>

<template>
  <UniTable
    row-key="id"
    class="container"
    :columns="columns"
    :data="data"
    :selection="{ type: 'single', disabledCondition }"
  >
  </UniTable>
</template>

<style scoped>
.container {
  width: 100%;
  height: 500px;
}
</style>
