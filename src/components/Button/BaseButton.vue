<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SBaseButton",
});
</script>

<script setup lang="ts"></script>

<template>
  <button ref="button" :class="$style.button">
    <slot> </slot>
  </button>
</template>

<style lang="scss" module>
@use "sass:map";
@use "@/styles/color";
@use "@/styles/type";

.button {
  box-sizing: border-box;
  position: relative;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background: none;
  overflow: hidden;
  outline: none;

  @include type.button;
  color: map.get(color.$primary, "500");

  cursor: pointer;
}

.buttonText {
  box-sizing: border-box;
}
</style>
