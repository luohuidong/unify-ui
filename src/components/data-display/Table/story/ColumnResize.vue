<script setup lang="ts">
import { ref, type Ref } from "vue";
import UniTable from "../index.vue";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: Ref<InstanceType<typeof UniTable>["$props"]["columns"]> = ref([
  {
    title: "Title",
    key: "title",
    width: 150,
    resizeable: true,
  },
  {
    title: "Author",
    key: "userId",
    width: 250,
    resizeable: true,
  },
  {
    title: "Post",
    key: "post",
    resizeable: true,
  },
]);
</script>

<template>
  <UniTable row-key="id" :columns="columns" :data="data">
    <template #userId="{ record }"> Author is {{ record.author }} </template>
  </UniTable>
</template>
