<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzButton",
});
</script>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: "secondary" | "primary";
    size?: "xs" | "s" | "m" | "l" | "xl";
  }>(),
  {
    type: "secondary",
    size: "m",
  }
);

const emits = defineEmits(["click"]);

function handleClick(e: MouseEvent) {
  emits("click", e);
}
</script>

<template>
  <button
    class="button"
    :class="{
      'button--size-xs': size === 'xs',
      'button--size-s': size === 's',
      'button--size-m': size === 'm',
      'button--size-l': size === 'l',
      'button--size-xl': size === 'xl',
      'button--primary': type === 'primary',
      'button--secondary': type === 'secondary',
    }"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
$primary-color: rgb(79 70 229);

.button {
  font-weight: 600;

  border: none;
  outline: none;

  background: none;
  cursor: pointer;
}

.button--size-xs {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
}

.button--size-s {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
}

.button--size-m {
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 20px;
}

.button--size-l {
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 20px;
}

.button--size-xl {
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 20px;
}

.button--primary {
  color: white;
  background-color: $primary-color;

  &:hover,
  &:active {
    background-color: rgb(99 102 241);
  }
}
</style>
