<script setup lang="ts">
import { ref } from "vue";
import { UniCheckboxGroup } from "unify-ui";

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
const checkboxGroupValue2 = ref(new Set<string>(["test1", "test3"]));
</script>

<template>
  <div>
    <UniCheckboxGroup v-model="checkboxGroupValue" :options="options" inline></UniCheckboxGroup>

    <UniCheckboxGroup
      v-model="checkboxGroupValue2"
      :options="options"
      disabled
      inline
    ></UniCheckboxGroup>
  </div>
</template>

<style lang="scss" scoped></style>
