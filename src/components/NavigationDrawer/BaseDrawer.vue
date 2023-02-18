<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzBaseDrawer",
});
</script>

<script setup lang="ts"></script>

<template>
  <div :class="$style.container">
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
@use "@/styles/color";

.container {
  width: 400px;
  height: 100%;

  position: absolute;
  left: 0;
  top: 0;
  background-color: color.$background;
}

.drawer {
  height: 100%;
}
</style>
