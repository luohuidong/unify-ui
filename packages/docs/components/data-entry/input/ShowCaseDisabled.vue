<script setup lang="ts">
import { EzInput } from "unify-ui";
import { ref } from "vue";

const value = ref("This Input is disabled");
</script>

<template>
  <EzInput v-model="value" disabled></EzInput>
</template>

<style lang="scss" scoped></style>
