<script setup lang="ts">
import { EzButton } from "unify-ui";
</script>

<template>
  <div class="container">
    <div>
      <EzButton type="soft" size="xs">Button size: xs</EzButton>
    </div>

    <div>
      <EzButton type="soft" size="s">Button size: s</EzButton>
    </div>

    <div>
      <EzButton type="soft" size="m">Button size: m</EzButton>
    </div>

    <div>
      <EzButton type="soft" size="l"> Button size: l </EzButton>
    </div>

    <div>
      <EzButton type="soft" size="xl">Button size: xl</EzButton>
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
