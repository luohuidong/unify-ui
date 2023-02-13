<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SToolTip",
});
</script>

<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <div :class="$style.tooltip">
    <slot></slot>
    <span :class="$style.title">{{ title }}</span>
  </div>
</template>

<style lang="scss" module>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .title {
  visibility: visible;
  opacity: 1;
}

/* Tooltip text */
.title {
  visibility: hidden;
  padding: 5px 10px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);

  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  white-space: nowrap;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.4s;

  /* Tooltip arrow */
  &::after {
    content: "";

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
}
</style>
