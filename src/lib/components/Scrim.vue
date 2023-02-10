<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VMScrim",
});
</script>

<script setup lang="ts">
const emits = defineEmits(["click"]);

function handleClick(event: MouseEvent) {
  emits("click", event);
}
</script>

<template>
  <div :class="$style.scrim" @click.self="handleClick">
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
@use "@/lib/styles/color";

.scrim {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  background-color: rgba(color.$background-dark, 0.7);
}
</style>
