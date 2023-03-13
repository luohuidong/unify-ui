<script setup lang="ts">
import { watchEffect, reactive } from "vue";

import EzTable from "../index.vue";
import useFetchData from "./useFetchData";

const { data } = useFetchData();

const columns: InstanceType<typeof EzTable>["$props"]["columns"] = [
  {
    title: "标识",
    key: "id",
    fixed: "left",
    width: 100,
  },
  {
    title: "用户标识",
    key: "userId",
    width: 150,
  },
  {
    title: "标题",
    key: "title",
    width: 300,
  },
  {
    title: "是否完成",
    key: "completed",
    width: 100,
  },
  {
    title: "操作",
    key: "actions",
    fixed: "right",
    width: 80,
  },
];

function disabledCondition(record: any) {
  return record.id === 1;
}

const state = reactive({
  selectedRowKeys: new Set<string>(),
});

watchEffect(() => {
  console.log("state.selectedRowKeys", state.selectedRowKeys);
});

function handleSelection(params: { selected: boolean; rowKey: string | number; record: any }) {
  console.log("🚀 ~ file: MultipleSelection.vue:52 ~ handleSelection ~ params:", params);
}

function handleSelectAll(params: {
  selected: boolean;
  rowKeys: (string | number)[];
  records: any[];
}) {
  console.log("🚀 ~ file: MultipleSelection.vue:56 ~ params:", params);
}
</script>

<template>
  <EzTable
    v-model:selected-row-keys="state.selectedRowKeys"
    row-key="id"
    class="container"
    :columns="columns"
    :data="data"
    :selection="{ type: 'multiple', disabledCondition }"
    @select="handleSelection"
    @select-all="handleSelectAll"
  >
    <template #userId="{ record }"> 用户标识：{{ record.userId }} </template>
    <template #actions>删除</template>
  </EzTable>
</template>

<style scoped>
.container {
  width: 600px;
  height: 500px;
}
</style>
