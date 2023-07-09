<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniScrim",
});
</script>

<script setup lang="ts">
const emits = defineEmits(["click"]);

function handleClick(event: MouseEvent) {
  emits("click", event);
}
</script>

<template>
  <div :class="$style['scrim']" @click.self="handleClick">
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
@use "@/styles/color";

.scrim {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500;

  background-color: rgba(color.$background-dark, 0.7);
}
</style>
