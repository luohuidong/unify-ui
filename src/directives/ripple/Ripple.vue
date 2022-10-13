<script setup lang="ts">
defineProps<{
  coordinate: {
    x: number;
    y: number;
  };
  radius: number;
  rippleColor: string;
}>();
</script>

<template>
  <div :class="$style.ripple"></div>
</template>

<style lang="scss" module>
.ripple {
  box-sizing: border-box;

  width: v-bind("2 * radius") px;
  height: v-bind("2 * radius") px;

  position: absolute;
  left: v-bind("coordinate.x") px;
  top: v-bind("coordinate.y") px;

  background-color: v-bind(rippleColor);
  border-radius: 50%;
  pointer-events: none;
  animation: rippleAnimate 300ms linear forwards;
}

@keyframes rippleAnimate {
  0% {
    transform: translate(-50%, -50%) scale(0.1);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
