<script setup lang="ts">
import { UniSelect } from "unify-ui";
import { ref } from "vue";

const value = ref<string>();

const options = [
  {
    label: "Option 1",
    value: "option-1",
  },
  {
    label: "Option 2",
    value: "option-2",
  },
  {
    label: "Option 3",
    value: "option-3",
  },
];
</script>

<template>
  <UniSelect v-model="value" :options="options" />
</template>

<style lang="scss" module></style>
