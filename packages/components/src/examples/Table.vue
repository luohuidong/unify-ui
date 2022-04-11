<script setup lang="ts">
import { h } from "vue";

import { VmTable } from "@/components/Table";

type Data = InstanceType<typeof VmTable>["$props"]["data"];

const data: Data = [
  {
    id: 1,
    name: "王小明",
    age: 18,
    birthday: "919526400000",
    address: "北京市朝阳区芍药居",
    files: [1, 2, 3, 4],
  },
  {
    id: 2,
    name: "张小刚",
    age: 25,
    birthday: "696096000000",
    address: "北京市海淀区西二旗",
  },
  {
    id: 3,
    name: "李小红",
    age: 30,
    birthday: "563472000000",
    address: "上海市浦东新区世纪大道",
  },
  {
    id: 4,
    name: "周小伟",
    age: 26,
    birthday: "687024000000",
    address: "深圳市南山区深南大道",
  },
];

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
  {
    title: "操作",
    key: "actions",
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
    unique-key="id"
    :columns="columns"
    :data="data"
    :row-expand="rowExpand"
  />
</template>

<style scoped></style>
