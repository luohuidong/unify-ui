<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzButton",
});
</script>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type: "text" | "outlined" | "contained";
  }>(),
  {
    type: "outlined",
  }
);

const emits = defineEmits(["click"]);

function handleClick(e: MouseEvent) {
  emits("click", e);
}
</script>

<template>
  <button
    :class="[
      $style.button,
      {
        [$style['button--contained']]: type === 'contained',
        [$style['button--outlined']]: type === 'outlined',
        [$style['button--text']]: type === 'text',
      },
    ]"
    @click="handleClick"
  >
    <slot></slot>
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

.button--contained {
  color: color.$font-light;
  background-color: map.get(color.$primary, "600");

  &:hover {
    background-color: map.get(color.$primary, "500");
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
      0px 1px 10px 0px rgb(0 0 0 / 12%);
    transition: box-shadow 300ms;
  }
  &:active {
    background-color: map.get(color.$primary, "600");
  }
}

.button--outlined {
  border: 1px solid map.get(color.$primary, "500");

  &:hover {
    background-color: map.get(color.$primary, "50");
  }
  &:active {
    background-color: map.get(color.$primary, "100");
  }
}

.button--text {
  &:hover {
    background-color: map.get(color.$primary, "50");
  }
  &:active {
    background-color: map.get(color.$primary, "100");
  }
}
</style>
