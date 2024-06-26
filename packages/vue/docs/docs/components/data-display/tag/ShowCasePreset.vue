<script setup lang="ts">
import { UniTag } from "unify-ui";

const presets = ["default", "info", "success", "warning", "error"] as const;
</script>

<template>
  <UniTag v-for="preset in presets" :key="preset" :type="preset">{{ preset }}</UniTag>
</template>
