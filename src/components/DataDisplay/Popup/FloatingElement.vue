<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzFloatingElement",
});
</script>

<script setup lang="ts">
import { inject, computed } from "vue";

import * as provideKeys from "./provideKeys";

const rootPropsKey = inject(provideKeys.rootPropsKey);
const floatingRef = inject(provideKeys.floatingRefKey);
const floatingArrowRef = inject(provideKeys.floatingArrowRefKey);
const background = computed(() => rootPropsKey?.backgroundColor || "#222");
const color = computed(() => rootPropsKey?.fontColor || "white");
</script>

<template>
  <div
    :ref="(e) => floatingRef?.setFloatingRef(e as HTMLDivElement)"
    class="tooltip"
    :class="[rootPropsKey?.overlayClassName]"
  >
    <slot></slot>

    <div
      v-if="rootPropsKey?.showArrow"
      :ref="(e)=> floatingArrowRef?.setFloatingArrowRef(e as HTMLDivElement)"
      class="arrow"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/zindex";

.tooltip {
  display: none;
  width: max-content;
  position: absolute;
  top: 0;
  left: 0;
  background: v-bind(background);
  color: v-bind(color);
  font-weight: bold;
  padding: 5px;
  border-radius: 4px;
  font-size: 90%;
  z-index: zindex.$popover;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
}

.arrow {
  position: absolute;
  background: v-bind(background);
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
}
</style>
