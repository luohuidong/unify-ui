<script setup lang="ts">
import { ref } from "vue";
import { UniDatePicker } from "unify-ui";

const date = ref();
</script>

<template>
  <div>
    <UniDatePicker v-model="date" />
  </div>
</template>

<style lang="scss" module></style>
