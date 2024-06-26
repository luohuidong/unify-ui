<script setup lang="ts">
import { ref } from "vue";
import { UniPassword } from "unify-ui";

const value = ref("");
</script>

<template>
  <UniPassword v-model="value" placeholder="Please enter password"></UniPassword>
</template>
