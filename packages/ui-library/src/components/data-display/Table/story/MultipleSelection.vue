<script setup lang="ts">
import { reactive, watch } from "vue";
import { UniButton } from "@/components";

import UniTable from "../index.vue";
import useFetchData from "./useFetchData";

const { data, refreshData } = useFetchData();

const columns: InstanceType<typeof UniTable>["$props"]["columns"] = [
  {
    title: "Title",
    key: "title",
    width: 100,
    fixed: "left",
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
  {
    title: "Actions",
    key: "actions",
    width: 150,
  },
];

function disabledCondition(record: any) {
  return record.id === 1;
}

const state = reactive({
  selectedRowKeys: new Set<string>(),
  selectedRows: new Map<string, any>(),
});

watch(
  () => [...state.selectedRowKeys],
  (value) => {
    console.log("🚀 ~ file: MultipleSelection.vue:47 ~ watch ~ value:", value);
  }
);

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

function handleSelectAll(params: { selected: boolean; rowKeys: (string | number)[]; records: any[] }) {
  handleChangeSelectionRows({ selected: params.selected, records: params.records });
}

function handleClearSelection() {
  state.selectedRowKeys.clear();
}
</script>

<template>
  <UniButton class="button" type="soft" @click="handleClearSelection"> Clear selectedRowKeys </UniButton>

  <UniButton class="button" type="soft" @click="refreshData"> Refresh Data </UniButton>

  <UniTable
    v-model:selected-row-keys="state.selectedRowKeys"
    row-key="id"
    class="container"
    :columns="columns"
    :data="data"
    :selection="{ type: 'multiple', disabledCondition }"
    @select="handleSelection"
    @select-all="handleSelectAll"
  >
  </UniTable>
</template>

<style scoped>
.button {
  margin-bottom: 20px;
  margin-right: 20px;
}

.container {
  width: 100%;
  height: 500px;
}
</style>
