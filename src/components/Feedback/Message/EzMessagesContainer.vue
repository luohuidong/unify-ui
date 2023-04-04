<script setup lang="ts">
defineProps<{
  id: string;
}>();
</script>

<template>
  <div :id="id" class="container"></div>
</template>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  pointer-events: none;
}
</style>
