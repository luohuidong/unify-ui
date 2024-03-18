<script setup lang="ts">
import { ref } from "vue";
import { UniPagination } from "unify-ui";

const total = ref(100);
const pageSize = ref(10);
const current = ref(1);

function handleChange(params: { current: number; pageSize: number }) {
  console.log(params);
  current.value = params.current;
  pageSize.value = params.pageSize;
}
</script>

<template>
  <div>total: {{ total }}</div>
  <div>pageSize: {{ pageSize }}</div>
  <div>current: {{ current }}</div>

  <UniPagination
    :total="total"
    :page-size="pageSize"
    :current="current"
    @chagne="handleChange"
  ></UniPagination>
</template>
