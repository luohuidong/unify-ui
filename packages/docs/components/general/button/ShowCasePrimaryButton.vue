<script setup lang="ts">
import { EzButton } from "@luohuidong/easy-ui";
</script>

<template>
  <div class="container">
    <div>
      <EzButton type="primary" size="xs">Button size: xs</EzButton>
    </div>

    <div>
      <EzButton type="primary" size="s">Button size: s</EzButton>
    </div>

    <div>
      <EzButton type="primary" size="m">Button size: m</EzButton>
    </div>

    <div>
      <EzButton type="primary" size="l"> Button size: l </EzButton>
    </div>

    <div>
      <EzButton type="primary" size="xl">Button size: xl</EzButton>
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
