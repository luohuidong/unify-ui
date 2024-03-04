<script setup lang="ts">
import { ref } from "vue";
import { UniSelect, UniSelectOption } from "unify-ui";

const options = [
  { label: "A", value: "a" },
  { label: "B", value: "b" },
  { label: "C", value: "c" },
  { label: "D", value: "d" },
  { label: "E", value: "e" },
  { label: "F", value: "f" },
];

const value = ref();
</script>

<template>
  <UniSelect v-model="value" disabled>
    <UniSelectOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></UniSelectOption>
  </UniSelect>
</template>
