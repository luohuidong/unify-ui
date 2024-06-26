<script setup lang="ts">
import { ref, type Ref } from "vue";
import { UniTable } from "unify-ui";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: Ref<InstanceType<typeof UniTable>["$props"]["columns"]> = ref([
  {
    title: "Title",
    key: "title",
    fixed: "left",
    width: 150,
    resizeable: true,
  },
  {
    title: "Author",
    key: "author",
    width: 150,
    resizeable: true,
  },
  {
    title: "Post",
    key: "post",
    width: 600,
    resizeable: true,
  },
  {
    title: "Actions",
    key: "actions",
    fixed: "right",
    width: 100,
  },
]);
</script>

<template>
  <UniTable row-key="id" class="container" v-model:columns="columns" :data="data">
    <template #actions>Delete</template>
  </UniTable>
</template>

<style scoped>
.container {
  width: 100%;
  height: 500px;
}
</style>
