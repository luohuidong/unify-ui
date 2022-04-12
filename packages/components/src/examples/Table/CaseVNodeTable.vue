<script setup lang="ts">
import { h } from "vue";
import { VmTable } from "@/components/Table";
import data from "./data.ts";

type Data = InstanceType<typeof VmTable>["$props"]["data"];

const columns: InstanceType<typeof VmTable>["$props"]["columns"] = [
  {
    title: "姓名",
    key: "name",
    render: (row: Record<string, unknown>) => h("span", row.name + "hahahaha"),
  },
  {
    title: "年龄",
    key: "age",
  },
  {
    title: "出生日期",
    key: "birthday",
  },
  {
    title: "地址",
    key: "address",
  },
];

const rowExpand: InstanceType<typeof VmTable>["$props"]["rowExpand"] = {
  expandCondition: (row: Data[number]) =>
    (row.files && [row.files as Array<number>].length) as boolean,
  expandRowRender: (row: Data[number]) =>
    h("div", (row.files as Array<number>).join(",")),
};
</script>

<template>
  <VmTable
    row-key="id"
    :columns="columns"
    :data="data"
    :row-expand="rowExpand"
  />
</template>

<style lang="less" scoped></style>
