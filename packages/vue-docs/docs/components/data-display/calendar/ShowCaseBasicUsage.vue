<script setup lang="ts">
import { UniCalendar } from "unify-ui";
import { ref } from "vue";

const date = ref(new Date());
</script>

<template>
  <UniCalendar v-model="date" />
</template>
