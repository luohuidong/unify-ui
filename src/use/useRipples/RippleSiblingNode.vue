<script setup lang="ts"></script>

<template>
  <div :class="$style.rippleSibilingNode">
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
.rippleSibilingNode {
  position: relative;
  z-index: 1;
}
</style>
