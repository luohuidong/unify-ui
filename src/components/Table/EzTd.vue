<script setup lang="ts"></script>

<template>
  <td :class="$style.tr">
    <slot></slot>
  </td>
</template>

<style lang="scss" module>
.tr {
  white-space: nowrap;
  padding: 16px;
  text-align: left;
  font-size: 14px;
}
</style>
