<script setup lang="ts">
import { ref } from "vue";
import { UniSwitch } from "@/index";

const value1 = ref(false);
const value2 = ref(true);
</script>

<template>
  <UniSwitch v-model="value1" disabled></UniSwitch>
  <UniSwitch v-model="value2" disabled></UniSwitch>
</template>

<style lang="scss" scoped></style>
