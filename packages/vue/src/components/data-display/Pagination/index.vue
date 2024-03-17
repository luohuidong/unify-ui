<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniPagination",
});
</script>

<script setup lang="ts">
import "@unify-ui/web-components/dist/pagination/index.js";

defineProps<{
  total: number;
  pageSize: number;
  current: number;
}>();

const emits = defineEmits<{
  (e: "chagne", params: { current: number; pageSize: number }): void;
}>();

function handleChange({ detail }: CustomEvent<{ current: number; pageSize: number }>) {
  console.log(detail);
  emits("chagne", { current: detail.current, pageSize: detail.pageSize });
}
</script>

<template>
  <u-pagination
    :total="total"
    :pagesize="pageSize"
    :current="current"
    @change="handleChange"
  ></u-pagination>
</template>
