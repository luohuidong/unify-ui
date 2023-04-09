<script setup lang="ts">
import { EzButton } from "@/components";
</script>

<template>
  <Story title="Generel/Button">
    <Variant title="Primary Buttons">
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
    </Variant>

    <EzButton>contained button</EzButton>
  </Story>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
</style>
