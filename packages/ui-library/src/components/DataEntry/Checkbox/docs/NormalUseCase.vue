<script setup lang="ts">
import { ref } from "vue";
import EzCheckbox from "../EzCheckbox.vue";

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(true);
const checked4 = ref(false);
</script>

<template>
  <EzCheckbox v-model:checked="checked1" label="checked"></EzCheckbox>
  <EzCheckbox v-model:checked="checked2" label="not checked"></EzCheckbox>
  <EzCheckbox v-model:checked="checked3" label="checked & disabled" disabled></EzCheckbox>
  <EzCheckbox v-model:checked="checked4" label="not checked & disabled" disabled></EzCheckbox>
</template>

<style lang="scss" module></style>
