<script setup lang="ts">
import UniRadioGroup from "../UniRadioGroup.vue";

const options = [
  { label: "one", value: "1" },
  { label: "two", value: "2" },
  { label: "three", value: "3" },
  { label: "four", value: "4" },
];
</script>

<template>
  <p>normal:</p>
  <UniRadioGroup name="number" :options="options"></UniRadioGroup>
  <p>inline：</p>
  <UniRadioGroup name="number" :options="options" inline></UniRadioGroup>
</template>

<style lang="scss" scoped></style>
