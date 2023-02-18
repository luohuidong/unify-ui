<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzTextButton",
});
</script>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
</script>

<template>
  <BaseButton :class="$style.textButton">
    <slot></slot>
  </BaseButton>
</template>

<style lang="scss" module>
@use "sass:map";
@use "@/styles/color";

.textButton {
  &:hover {
    background-color: map.get(color.$primary, "50");
  }
}
</style>
