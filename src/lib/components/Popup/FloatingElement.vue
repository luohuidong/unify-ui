<script setup lang="ts">
import { inject, computed } from "vue";

import * as provideKeys from "./provideKeys";

const rootPropsKey = inject(provideKeys.rootPropsKey);
const floatingRef = inject(provideKeys.floatingRefKey);
const floatingArrowRef = inject(provideKeys.floatingArrowRefKey);
const background = computed(() => rootPropsKey?.overlayBackgroundColor || "#222");
const color = computed(() => rootPropsKey?.overlayFontColor || "white");
</script>

<template>
  <div
    :ref="(e) => floatingRef?.setFloatingRef(e as HTMLDivElement)"
    :class="[$style.tooltip, rootPropsKey?.overlayClassName]"
  >
    <slot></slot>

    <div
      v-if="rootPropsKey?.overlayBackgroundShowArrow"
      :ref="(e)=> floatingArrowRef?.setFloatingArrowRef(e as HTMLDivElement)"
      :class="$style.arrow"
    ></div>
  </div>
</template>

<style module>
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
}

.arrow {
  position: absolute;
  background: v-bind(background);
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
}
</style>
