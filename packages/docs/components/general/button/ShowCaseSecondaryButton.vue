<script setup lang="ts">
import { EzButton } from "@luohuidong/easy-ui";
</script>

<template>
  <div class="container">
    <div>
      <EzButton type="secondary" size="xs">Button size: xs</EzButton>
    </div>

    <div>
      <EzButton type="secondary" size="s">Button size: s</EzButton>
    </div>

    <div>
      <EzButton type="secondary" size="m">Button size: m</EzButton>
    </div>

    <div>
      <EzButton type="secondary" size="l"> Button size: l </EzButton>
    </div>

    <div>
      <EzButton type="secondary" size="xl">Button size: xl</EzButton>
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
