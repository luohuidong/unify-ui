<script setup lang="ts">
import { ref } from "vue";

import EzCheckboxGroup from "../EzCheckboxGroup.vue";

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

const checkboxGroupValue = ref(new Set<string>());
const checkboxGroupValue2 = ref(new Set<string>(["test1", "test3"]));
</script>

<template>
  <ul>
    <li>
      normal checkbox group:
      <EzCheckboxGroup v-model="checkboxGroupValue" :options="options"></EzCheckboxGroup>
    </li>

    <li>
      with initial value:
      <EzCheckboxGroup v-model="checkboxGroupValue2" :options="options"></EzCheckboxGroup>
    </li>

    <li>
      disabled checkbox group:
      <EzCheckboxGroup v-model="checkboxGroupValue" :options="options" disabled></EzCheckboxGroup>
    </li>

    <li>
      disabled checkbox group with initial value:
      <EzCheckboxGroup v-model="checkboxGroupValue2" :options="options" disabled></EzCheckboxGroup>
    </li>
  </ul>
</template>

<style lang="scss" module></style>
