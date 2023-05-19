<script setup lang="ts">
import { ref } from "vue";
import UniRadioGroup from "../UniRadioGroup.vue";

const options = [
  { label: "one", value: "1" },
  { label: "two", value: "2" },
  { label: "three", value: "3" },
  { label: "four", value: "4" },
];

const value = ref("1");

function handleChange(value: string) {
  console.log("value", value);
}
</script>

<template>
  <p>normal:</p>
  <UniRadioGroup
    v-model="value"
    name="number1"
    :options="options"
    @change="handleChange"
  ></UniRadioGroup>

  <p>inline:</p>
  <UniRadioGroup v-model="value" name="number2" :options="options" inline></UniRadioGroup>
</template>

<style lang="scss" scoped></style>
