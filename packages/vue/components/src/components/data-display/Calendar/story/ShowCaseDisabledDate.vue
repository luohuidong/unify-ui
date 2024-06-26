<script setup lang="ts">
import { ref } from "vue";

import { UniCalendar } from "@/index";

const value = ref();
</script>

<template>
  <UniCalendar v-model="value" :disabled-date="(date) => date.getDate() === 18" />
</template>

<style lang="scss" scoped></style>
