<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectLoading",
});
</script>

<script setup lang="ts">
import { Loading } from "@/icons";
</script>

<template>
  <div :class="$style['icon-container']">
    <Loading :class="[$style['icon'], $style['icon--rotate']]"></Loading>
  </div>
</template>

<style lang="scss" module>
@use "@/styles/form";
@use "@/styles/color";

.icon-container {
  height: form.$control-height;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  color: color.$primary;
}

.icon--rotate {
  animation: rotation 1s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
