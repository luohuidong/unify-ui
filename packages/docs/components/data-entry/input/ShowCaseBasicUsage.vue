<script setup lang="ts">
import { EzInput } from "unify-ui";
import { ref } from "vue";

const value = ref("");
</script>

<template>
  <EzInput v-model="value" />
</template>

<style lang="scss" scoped>
.container > div {
  margin-bottom: 20px;
}
</style>
