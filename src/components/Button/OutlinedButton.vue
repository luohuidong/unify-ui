<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzOutlineButton",
});
</script>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
</script>

<template>
  <BaseButton :class="$style.outlinedButton">
    <slot></slot>
  </BaseButton>
</template>

<style lang="scss" module>
@use "sass:map";
@use "@/styles/color";

.outlinedButton {
  border: 1px solid map.get(color.$primary, "500");

  &:hover {
    background-color: map.get(color.$primary, "50");
  }
}
</style>
