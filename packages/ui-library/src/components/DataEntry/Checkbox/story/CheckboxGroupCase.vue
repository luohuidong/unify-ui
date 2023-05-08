<script setup lang="ts">
import { ref } from "vue";

import UniCheckboxGroup from "../UniCheckboxGroup.vue";

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
      <UniCheckboxGroup
        v-model="checkboxGroupValue"
        name="group1"
        :options="options"
      ></UniCheckboxGroup>
    </li>

    <li>
      with initial value:
      <UniCheckboxGroup
        v-model="checkboxGroupValue2"
        name="group2"
        :options="options"
      ></UniCheckboxGroup>
    </li>

    <li>
      disabled checkbox group:
      <UniCheckboxGroup
        v-model="checkboxGroupValue"
        name="group3"
        :options="options"
        disabled
      ></UniCheckboxGroup>
    </li>

    <li>
      disabled checkbox group with initial value:
      <UniCheckboxGroup
        v-model="checkboxGroupValue2"
        name="group4"
        :options="options"
        disabled
      ></UniCheckboxGroup>
    </li>

    <li>
      inline checkbox group:
      <UniCheckboxGroup
        v-model="checkboxGroupValue2"
        name="group4"
        :options="options"
        disabled
        inline
      ></UniCheckboxGroup>
    </li>
  </ul>
</template>

<style lang="scss" module></style>
