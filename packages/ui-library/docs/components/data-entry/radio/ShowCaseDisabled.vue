<script setup lang="ts">
import { UniRadio } from "unify-ui";
</script>

<template>
  <div class="container">
    <div>
      <UniRadio name="radio-disabled" label="one" value="1" disabled></UniRadio>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 10px;
}
</style>
