<script setup lang="ts">
import { ref } from "vue";
import { UniPassword } from "unify-ui";

const value = ref("");
</script>

<template>
  <div>
    <UniPassword v-model="value"></UniPassword>
  </div>
</template>

<style lang="scss" scoped></style>
