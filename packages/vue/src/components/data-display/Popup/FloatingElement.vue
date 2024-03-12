<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniFloatingElement",
});
</script>

<script setup lang="ts">
import { inject } from "vue";

import * as provideKeys from "./provideKeys";

const rootPropsKey = inject(provideKeys.rootPropsKey);
const floatingRef = inject(provideKeys.floatingRefKey);
const floatingArrowRef = inject(provideKeys.floatingArrowRefKey);
</script>

<template>
  <div
    :ref="(e) => floatingRef?.setFloatingRef(e as HTMLDivElement)"
    :class="[$style['floating-element'], rootPropsKey?.overlayClassName]"
  >
    <slot></slot>

    <div
      v-show="rootPropsKey?.showArrow"
      :ref="(e) => floatingArrowRef?.setFloatingArrowRef(e as HTMLDivElement)"
      :class="$style.arrow"
    ></div>
  </div>
</template>

<style lang="scss" module>
@use "@/styles/zindex";

.floating-element {
  display: none;
  width: max-content;
  position: absolute;
  top: 0;
  left: 0;

  background-color: #ffffff;
  font-weight: bold;
  border-radius: 4px;
  font-size: 90%;
  z-index: zindex.$popover;
  box-shadow:
    0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
}

.arrow {
  position: absolute;
  background-color: inherit;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
}
</style>
