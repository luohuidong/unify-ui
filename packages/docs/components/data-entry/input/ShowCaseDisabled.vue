<script setup lang="ts">
import { UniInput } from "unify-ui";
import { ref } from "vue";

const value = ref("This Input is disabled");
</script>

<template>
  <UniInput v-model="value" disabled></UniInput>
</template>

<style lang="scss" scoped></style>
