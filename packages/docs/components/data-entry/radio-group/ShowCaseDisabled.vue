<script setup lang="ts">
import { ref } from "vue";
import { UniRadioGroup } from "unify-ui";

const options = [
  { label: "one", value: "1" },
  { label: "two", value: "2" },
  { label: "three", value: "3" },
  { label: "four", value: "4" },
];

const value = ref("1");
</script>

<template>
  <UniRadioGroup v-model="value" name="disabled-case" :options="options" disabled></UniRadioGroup>
</template>

<style lang="scss" scoped></style>
