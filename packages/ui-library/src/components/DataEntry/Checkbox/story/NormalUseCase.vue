<script setup lang="ts">
import { ref } from "vue";
import UniCheckbox from "../UniCheckbox.vue";

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(true);
const checked4 = ref(false);
</script>

<template>
  <UniCheckbox v-model:checked="checked1" label="checked"></UniCheckbox>
  <UniCheckbox v-model:checked="checked2" label="not checked"></UniCheckbox>
  <UniCheckbox v-model:checked="checked3" label="checked & disabled" disabled></UniCheckbox>
  <UniCheckbox v-model:checked="checked4" label="not checked & disabled" disabled></UniCheckbox>
</template>

<style lang="scss" module></style>
