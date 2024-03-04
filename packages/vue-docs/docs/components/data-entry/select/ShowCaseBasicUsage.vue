<script setup lang="ts">
import { UniSelect, UniSelectOption } from "unify-ui";
import { ref } from "vue";

const value = ref<string>();

const options = [
  { label: "A", value: "a" },
  { label: "B", value: "b" },
  { label: "C", value: "c" },
  { label: "D", value: "d" },
  { label: "E", value: "e" },
  { label: "F", value: "f" },
];
</script>

<template>
  <UniSelect v-model="value">
    <UniSelectOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></UniSelectOption>
  </UniSelect>
</template>
