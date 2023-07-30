<script setup lang="ts">
import { ref } from "vue";

import { UniCalendar } from "@/components";

const value = ref();
</script>

<template>
  <UniCalendar v-model="value" />
</template>

<style lang="scss" scoped></style>
