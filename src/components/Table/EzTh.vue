<script setup lang="ts"></script>

<template>
  <th :class="$style.th">
    <slot></slot>
  </th>
</template>

<style lang="scss" module>
.th {
  white-space: nowrap;
  padding: 16px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
}
</style>
