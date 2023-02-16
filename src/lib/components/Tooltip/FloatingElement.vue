<script setup lang="ts">
defineProps<{
  overlayClassName?: string;
  title: string;
  setFloatingRef: (el: HTMLElement) => void;
  setFloatingArrowRef: (el: HTMLElement) => void;
}>();
</script>

<template>
  <div
    :ref="(e) => setFloatingRef(e as HTMLDivElement)"
    :class="[$style.tooltip, overlayClassName]"
  >
    {{ title }}
    <div :ref="(e)=>setFloatingArrowRef(e as HTMLDivElement)" :class="$style.arrow"></div>
  </div>
</template>

<style module>
.tooltip {
  display: none;
  width: max-content;
  position: absolute;
  top: 0;
  left: 0;
  background: #222;
  color: white;
  font-weight: bold;
  padding: 5px;
  border-radius: 4px;
  font-size: 90%;
}

.arrow {
  position: absolute;
  background: #222;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
}
</style>
