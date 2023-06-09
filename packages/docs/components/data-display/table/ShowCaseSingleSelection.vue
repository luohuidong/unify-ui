<script setup lang="ts">
import { reactive } from "vue";
import { UniTable } from "unify-ui";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const state = reactive({
  selectedRowKeys: new Set<string>(),
});

const columns: InstanceType<typeof UniTable>["$props"]["columns"] = [
  {
    title: "Title",
    key: "title",
    width: 150,
  },
  {
    title: "Author",
    key: "author",
    width: 150,
  },
  {
    title: "Post",
    key: "post",
    width: 500,
  },
];

function disabledCondition(record: any) {
  return record.id === 1;
}
</script>

<template>
  <UniTable
    v-model:selected-row-keys="state.selectedRowKeys"
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
