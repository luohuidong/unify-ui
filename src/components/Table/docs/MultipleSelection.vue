<script setup lang="ts">
import { reactive, watchEffect } from "vue";

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
  selectedRows: new Map<string, unknown>(),
});

watchEffect(() => {
  console.log("state.selectedRowKeys", state.selectedRowKeys);
});

watchEffect(() => {
  console.log("state.selectedRows", state.selectedRows);
});

function handleSelectedChange(params: {
  selectedRowKeys: (string | number)[];
  selectedRows: any[];
}) {
  console.log("params", params);
}
</script>

<template>
  <EzTable
    v-model:selected-row-keys="state.selectedRowKeys"
    v-model:selected-rows="state.selectedRows"
    row-key="id"
    class="container"
    :columns="columns"
    :data="data"
    :selection="{ type: 'multiple', disabledCondition }"
    @selected-change="handleSelectedChange"
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
