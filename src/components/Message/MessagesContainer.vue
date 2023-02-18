<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzMessagesContainer",
});
</script>

<script setup lang="ts">
defineProps<{
  id: string;
}>();
</script>

<template>
  <div :id="id" :class="$style.container"></div>
</template>

<style lang="scss" module>
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
