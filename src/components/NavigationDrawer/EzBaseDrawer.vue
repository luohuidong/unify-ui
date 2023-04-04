<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
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
