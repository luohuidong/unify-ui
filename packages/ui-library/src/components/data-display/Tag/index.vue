<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniTag",
});
</script>

<script setup lang="ts"></script>

<template>
  <span :class="$style.tag">
    <slot></slot>
  </span>
</template>

<style lang="scss" module>
@use "@/styles/color";

.tag {
  padding: 4px 8px;
  font-size: 12px;
  color: color.$gray-500;
  background: color.$gray-50;
  border: 1px solid color.$gray-200;
  border-radius: 6px;
}
</style>
