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
  <div>
    <UniSelect v-model="value">
      <UniSelectOption
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.value === 'c'"
      ></UniSelectOption>
    </UniSelect>
  </div>
</template>
