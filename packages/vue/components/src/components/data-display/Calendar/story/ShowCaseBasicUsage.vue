<script setup lang="ts">
import { ref } from "vue";

import { UniCalendar } from "@/index";

const value = ref();
</script>

<template>
  <UniCalendar v-model="value" />
</template>

<style lang="scss" scoped></style>
