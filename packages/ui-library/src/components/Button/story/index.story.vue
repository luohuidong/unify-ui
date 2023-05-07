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

    <Variant title="Secondary Buttons">
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
    </Variant>

    <Variant title="Soft Buttons">
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
    </Variant>

    <Variant title="Rounded Border">
      <div class="container">
        <div>
          <EzButton rounded>Button1</EzButton>
        </div>

        <div>
          <EzButton type="primary" rounded>Button2</EzButton>
        </div>

        <div>
          <EzButton type="soft" rounded>Button3</EzButton>
        </div>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
</style>
