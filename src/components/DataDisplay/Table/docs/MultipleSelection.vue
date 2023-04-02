<script setup lang="ts">
import { watchEffect, reactive } from "vue";

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

const state = reactive({
  selectedRowKeys: new Set<string>(),
  selectedRows: new Map<string, any>(),
});

watchEffect(() => {
  console.log("state.selectedRowKeys", state.selectedRowKeys);
});

function handleChangeSelectionRows(params: { selected: boolean; records: any[] }) {
  params.records.forEach((item) => {
    if (params.selected) {
      state.selectedRows.set(item.id, item);
    } else {
      state.selectedRows.delete(item.id);
    }
  });
}

function handleSelection(params: { selected: boolean; rowKey: string | number; record: any }) {
  handleChangeSelectionRows({ selected: params.selected, records: [params.record] });
}

function handleSelectAll(params: {
  selected: boolean;
  rowKeys: (string | number)[];
  records: any[];
}) {
  handleChangeSelectionRows({ selected: params.selected, records: params.records });
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
  </EzTable>
</template>

<style scoped>
.container {
  width: 100%;
  height: 500px;
}
</style>
