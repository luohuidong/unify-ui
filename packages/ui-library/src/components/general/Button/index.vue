<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniButton",
});
</script>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: "secondary" | "primary" | "soft";
    size?: "xs" | "s" | "m" | "l" | "xl";
    rounded?: boolean;
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
      'button--type-primary': type === 'primary',
      'button--type-secondary': type === 'secondary',
      'button--type-soft': type === 'soft',
      'button--rounded': rounded,
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

.button--type-primary {
  color: white;
  background-color: $primary-color;
  border: 1px solid $primary-color;

  &:hover,
  &:active {
    background-color: rgb(99 102 241);
  }
}

.button--type-secondary {
  color: rgb(17 24 39);
  background-color: white;
  border: 1px solid #e5e7eb;

  &:hover,
  &:active {
    background-color: rgb(249 250 251);
  }
}

.button--type-soft {
  $normal-color: rgb(238 242 255);
  $active-color: rgb(224 231 255);

  color: $primary-color;
  background-color: $normal-color;
  border-width: 1px;
  border-style: solid;
  border-color: $normal-color;

  &:hover,
  &:active {
    background-color: $active-color;
    border-color: $active-color;
  }
}

.button--rounded {
  border-radius: 9999px;
}
</style>
