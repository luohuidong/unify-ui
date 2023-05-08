<script setup lang="ts">
import { UniButton } from "@/components";
</script>

<template>
  <Story title="Generel/Button">
    <Variant title="Primary Buttons">
      <div class="container">
        <div>
          <UniButton type="primary" size="xs">Button size: xs</UniButton>
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
    </Variant>

    <Variant title="Secondary Buttons">
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
    </Variant>

    <Variant title="Soft Buttons">
      <div class="container">
        <div>
          <UniButton type="soft" size="xs">Button size: xs</UniButton>
        </div>

        <div>
          <UniButton type="soft" size="s">Button size: s</UniButton>
        </div>

        <div>
          <UniButton type="soft" size="m">Button size: m</UniButton>
        </div>

        <div>
          <UniButton type="soft" size="l"> Button size: l </UniButton>
        </div>

        <div>
          <UniButton type="soft" size="xl">Button size: xl</UniButton>
        </div>
      </div>
    </Variant>

    <Variant title="Rounded Border">
      <div class="container">
        <div>
          <UniButton rounded>Button1</UniButton>
        </div>

        <div>
          <UniButton type="primary" rounded>Button2</UniButton>
        </div>

        <div>
          <UniButton type="soft" rounded>Button3</UniButton>
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
