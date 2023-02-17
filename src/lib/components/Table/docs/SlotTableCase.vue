<script setup lang="ts">
import { VmTable } from "@/lib/components/Table";
import useFetchData from "./useFetchData";

const { data } = useFetchData();
type Data = InstanceType<typeof VmTable>["$props"]["data"];

const columns: InstanceType<typeof VmTable>["$props"]["columns"] = [
  {
    title: "id",
    key: "id",
  },
  {
    title: "用户 id",
    key: "userId",
  },
  {
    title: "标题",
    key: "title",
  },
  {
    title: "是否完成",
    key: "completed",
  },
];

const rowExpand: InstanceType<typeof VmTable>["$props"]["rowExpand"] = {
  expandCondition: (row: Data[number]) =>
    (row.files && [row.files as Array<number>].length) as boolean,
  expandSlotName: "rowExpand",
};
</script>

<template>
  <VmTable row-key="id" :columns="columns" :data="data" :row-expand="rowExpand">
    <template #birthday="{ rowData }">
      {{ rowData.birthday }}
    </template>

    <template #address="{ rowData }">
      {{ rowData.address }}
    </template>

    <template #rowExpand="{ rowData }">
      {{ `展开行 ${rowData.name}: ${rowData.age} 岁` }}
    </template>
  </VmTable>
</template>

<style lang="less" scoped></style>
