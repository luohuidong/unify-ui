<script setup lang="ts">
import { ref, type Ref } from "vue";
import UniTable from "../index.vue";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns = ref<InstanceType<typeof UniTable>["$props"]["columns"]>([
  {
    title: "Title",
    key: "title",
    width: 150,
    resizeable: true,
  },
  {
    title: "Author",
    key: "userId",
    width: 200,
    resizeable: true,
  },
  {
    title: "Post",
    key: "post",
    width: 250,
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
  <UniTable row-key="id" :columns="columns" :data="data" :style="{ height: '500px' }">
    <template #userId="{ record }"> Author is {{ record.author }} </template>
  </UniTable>
</template>
