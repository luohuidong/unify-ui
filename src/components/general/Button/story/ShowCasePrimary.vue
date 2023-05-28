<script setup lang="ts">
import UniButton from "../index.vue";

function handleClick(e: MouseEvent) {
  console.log("primary button click", e);
}
</script>

<template>
  <div class="container">
    <div>
      <UniButton type="primary" size="xs" @click="handleClick">Button size: xs</UniButton>
    </div>

    <div>
      <UniButton type="primary" size="s">Button size: s</UniButton>
    </div>

    <div>
      <UniButton type="primary" size="m">Button size: m</UniButton>
    </div>

    <div>
      <UniButton type="primary" size="l"> Button size: l </UniButton>
    </div>

    <div>
      <UniButton type="primary" size="xl">Button size: xl</UniButton>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
</style>
