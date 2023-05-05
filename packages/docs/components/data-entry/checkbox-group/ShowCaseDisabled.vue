<script setup lang="ts">
import { ref } from "vue";
import { EzCheckboxGroup } from "@easy-ui-team/easy-ui";

const options = [
  {
    label: "test1",
    value: "test1",
  },
  {
    label: "test2",
    value: "test2",
  },
  {
    label: "test3",
    value: "test3",
  },
];

const checkboxGroupValue = ref(new Set<string>(["test1", "test3"]));
</script>

<template>
  <EzCheckboxGroup
    v-model="checkboxGroupValue"
    name="group1"
    :options="options"
    disabled
  ></EzCheckboxGroup>
</template>

<style lang="scss" scoped></style>
