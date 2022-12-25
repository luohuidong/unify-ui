<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VMContainedButton",
});
</script>

<script lang="ts" setup>
import BaseButton from "./BaseButton.vue";
</script>

<template>
  <BaseButton :class="$style.containedButton">
    <slot></slot>
  </BaseButton>
</template>

<style lang="scss" module>
@use "sass:map";
@use "@/lib/styles/color";

.containedButton {
  color: color.$font-light;
  background-color: map.get(color.$primary, "600");

  &:hover {
    background-color: map.get(color.$primary, "500");
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    transition: box-shadow 300ms;
  }
}
</style>
