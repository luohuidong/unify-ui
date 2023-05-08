<script setup lang="ts">
import { UniNotFound } from "unify-ui";
</script>

<template>
  <div class="container">
    <div>
      <UniNotFound></UniNotFound>
    </div>

    <div>
      <UniNotFound align="right"></UniNotFound>
    </div>

    <div>
      <UniNotFound align="left"></UniNotFound>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: repeat(3, 200px);
  gap: 20px;
}
</style>
