<script setup lang="ts">
import { ref } from "vue";
import { UniDatePicker } from "unify-ui";

const date = ref();
</script>

<template>
  <UniDatePicker v-model="date" />
</template>
