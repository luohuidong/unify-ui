<script setup lang="ts">
import { h } from "vue";
import { VmTable } from "@/components/Table";
import data from "./data.ts";

type Data = InstanceType<typeof VmTable>["$props"]["data"];

const columns: InstanceType<typeof VmTable>["$props"]["columns"] = [
  {
    title: "姓名",
    key: "name",
    slotName: "name",
  },
  {
    title: "年龄",
    key: "age",
    slotName: "age",
  },
  {
    title: "出生日期",
    key: "birthday",
    slotName: "birthday",
  },
  {
    title: "地址",
    key: "address",
    slotName: "address",
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
    <template #name="{ rowData }">
      {{ rowData.name }}
    </template>

    <template #age="{ rowData }">
      {{ rowData.age + "岁" }}
    </template>

    <template #birthday="{ rowData }">
      {{ rowData.birthday }}
    </template>

    <template #address="{ rowData }">
      {{ rowData.address }}
    </template>

    <template #rowExpand="{ rowData }">
      {{ `${rowData.name}: ${rowData.age} 岁` }}
    </template>
  </VmTable>
</template>

<style lang="less" scoped></style>
