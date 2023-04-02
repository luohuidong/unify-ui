<script setup lang="ts">
import EzTable from "../index.vue";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: InstanceType<typeof EzTable>["$props"]["columns"] = [
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
  },
];

function disabledCondition(record: any) {
  return record.id === 1;
}
</script>

<template>
  <EzTable
    row-key="id"
    class="container"
    :columns="columns"
    :data="data"
    :selection="{ type: 'single', disabledCondition }"
  >
  </EzTable>
</template>

<style scoped>
.container {
  width: 100%;
  height: 500px;
}
</style>
