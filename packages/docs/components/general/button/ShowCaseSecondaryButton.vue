<script setup lang="ts">
import { UniButton } from "unify-ui";
</script>

<template>
  <div class="container">
    <div>
      <UniButton type="secondary" size="xs">Button size: xs</UniButton>
    </div>

    <div>
      <UniButton type="secondary" size="s">Button size: s</UniButton>
    </div>

    <div>
      <UniButton type="secondary" size="m">Button size: m</UniButton>
    </div>

    <div>
      <UniButton type="secondary" size="l"> Button size: l </UniButton>
    </div>

    <div>
      <UniButton type="secondary" size="xl">Button size: xl</UniButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
</style>
