<script setup lang="ts">
import { watch, reactive } from "vue";
import { UniTable, UniButton } from "unify-ui";

import useFetchData from "./useFetchData";

const { data } = useFetchData();

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

function handleChangeSelectionRows(params: {
  selected: boolean;
  records: any[];
}) {
  params.records.forEach((item) => {
    if (params.selected) {
      state.selectedRows.set(item.id, item);
    } else {
      state.selectedRows.delete(item.id);
    }
  });
}

function handleSelection(params: {
  selected: boolean;
  rowKey: string | number;
  record: any;
}) {
  handleChangeSelectionRows({
    selected: params.selected,
    records: [params.record],
  });
}

function handleSelectAll(params: {
  selected: boolean;
  rowKeys: (string | number)[];
  records: any[];
}) {
  handleChangeSelectionRows({
    selected: params.selected,
    records: params.records,
  });
}

function handleClearSelection() {
  state.selectedRowKeys.clear();
}
</script>

<template>
  <div>
    <UniButton class="button" type="soft" @click="handleClearSelection">
      Clear selectedRowKeys
    </UniButton>

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
  </div>
</template>

<style scoped>
.button {
  margin-bottom: 20px;
}

.container {
  width: 100%;
  height: 500px;
}
</style>
