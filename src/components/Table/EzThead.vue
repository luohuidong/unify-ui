<script setup lang="ts"></script>

<template>
  <thead :class="$style.thead">
    <slot></slot>
  </thead>
</template>

<style lang="scss" module>
.thead {
  background: #fafafa;
}
</style>
