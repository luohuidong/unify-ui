<script setup lang="ts">
import { ref } from "vue";
import { UniSelect, UniSelectOption } from "unify-ui";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cat", value: "cat" },
  { label: "Dog", value: "dog" },
];

const value = ref();
</script>

<template>
  <UniSelect v-model="value" local-search>
    <UniSelectOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></UniSelectOption>
  </UniSelect>
</template>
