<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div :class="$style['message']">
    <span :class="$style['message__text']">{{ text }}</span>
  </div>
</template>

<style lang="scss" module>
.message {
  height: 54px;
  width: 400px;

  margin-bottom: 20px;
  padding: 0 16px;

  display: flex;
  align-items: center;

  background: #333333;
  border-radius: 4px;
  box-shadow:
    0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14),
    0 1px 18px 0 rgba(0, 0, 0, 0.12);
}

.message__text {
  color: white;
  font-size: 14px;
}
</style>
