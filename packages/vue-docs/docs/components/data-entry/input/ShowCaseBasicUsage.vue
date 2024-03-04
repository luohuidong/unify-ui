<script setup lang="ts">
import { UniInput } from "unify-ui";
import { ref } from "vue";

const value = ref("");
</script>

<template>
  <UniInput v-model="value" />
</template>

<style lang="scss" scoped>
.container > div {
  margin-bottom: 20px;
}
</style>
