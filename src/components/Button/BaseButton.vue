<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VMBaseButton",
});
</script>

<script setup lang="ts">
import { RippleSiblingNode } from "@/use/useRipples";
</script>

<template>
  <button ref="button" :class="$style.button">
    <RippleSiblingNode>
      <slot> </slot>
    </RippleSiblingNode>
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
