<script setup lang="ts">
import { ref, watch } from "vue";
import { UniSwitch } from "@/components";

const value = ref(false);

watch(value, (value) => {
  console.log(value);
});
</script>

<template>
  <UniSwitch v-model="value"></UniSwitch>
</template>

<style lang="scss" scoped></style>
