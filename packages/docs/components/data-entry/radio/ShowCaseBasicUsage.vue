<script setup lang="ts">
import { UniRadio } from "unify-ui";
</script>

<template>
  <div class="container">
    <div>
      <UniRadio name="radio" label="one" value="1"></UniRadio>
    </div>

    <div>
      <UniRadio name="radio" label="two" value="2"></UniRadio>
    </div>

    <div>
      <UniRadio name="radio" label="three" value="3"></UniRadio>
    </div>

    <div>
      <UniRadio name="radio" label="four" value="4"></UniRadio>
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
