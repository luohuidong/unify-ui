<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SPopover",
});
</script>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, provide } from "vue";
import { computePosition, flip, shift, offset, arrow, autoUpdate } from "@floating-ui/dom";

import * as provideKeys from "./provideKeys";
import FloatingElement from "./FloatingElement.vue";

const props = withDefaults(
  defineProps<{
    overlayPlacement: "top" | "bottom" | "left" | "right";
    overlayAppendToBody?: boolean;
    overlayClassName?: string;
    overlayFontColor?: string;
    overlayBackgroundColor?: string;
    overlayBackgroundShowArrow?: boolean;
  }>(),
  {
    overlayClassName: void 0,
    overlayFontColor: void 0,
    overlayBackgroundColor: void 0,
    overlayBackgroundShowArrow: true,
  }
);
provide(provideKeys.rootPropsKey, props);

const referenceRef = ref<Element | null>(null);
provide(provideKeys.referenceRefKey, {
  referenceRef,
});

const floatingRef = ref<HTMLElement | null>(null);
function setFloatingRef(e: HTMLElement) {
  floatingRef.value = e;
}
provide(provideKeys.floatingRefKey, {
  floatingRef,
  setFloatingRef,
});

const floatingArrowRef = ref<HTMLElement | null>(null);
function setFloatingArrowRef(e: HTMLElement) {
  floatingArrowRef.value = e;
}
provide(provideKeys.floatingArrowRefKey, {
  floatingArrowRef,
  setFloatingArrowRef,
});

function updatePosition() {
  const reference = referenceRef.value;
  const floating = floatingRef.value;
  const floatingArrow = floatingArrowRef.value;

  if (reference && floating && floatingArrow) {
    computePosition(reference, floating, {
      placement: props.overlayPlacement,
      middleware: [offset(6), flip(), shift({ padding: 5 }), arrow({ element: floatingArrow })],
    }).then(({ x, y, middlewareData, placement }) => {
      Object.assign(floating.style, {
        left: `${x}px`,
        top: `${y}px`,
      });

      if (middlewareData.arrow) {
        const { x: arrowX, y: arrowY } = middlewareData.arrow;

        const staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right",
        }[placement.split("-")[0]] as "top" | "right" | "bottom" | "left";

        Object.assign(floatingArrow.style, {
          left: arrowX != null ? `${arrowX}px` : "",
          top: arrowY != null ? `${arrowY}px` : "",
          right: "",
          bottom: "",
          [staticSide]: "-4px",
        });
      }
    });
  }
}

let cleanup: (() => void) | null = null;

function showTooltip() {
  const reference = referenceRef.value;
  const floating = floatingRef.value;

  if (reference && floating) {
    floating.style.display = "block";
    cleanup = autoUpdate(reference, floating, updatePosition);
  }

  updatePosition();
}

function hideTooltip() {
  const reference = referenceRef.value;
  const floating = floatingRef.value;

  if (reference && floating) {
    floating.style.display = "";
    cleanup && cleanup();
  }
}

onMounted(() => {
  const reference = referenceRef.value;
  if (reference) {
    reference.addEventListener("mouseenter", showTooltip);
    reference.addEventListener("mouseleave", hideTooltip);
    reference.addEventListener("focus", showTooltip);
    reference.addEventListener("blur", hideTooltip);
  }
});

onUnmounted(() => {
  const reference = referenceRef.value;
  if (reference) {
    reference.removeEventListener("mouseenter", showTooltip);
    reference.removeEventListener("mouseleave", hideTooltip);
    reference.removeEventListener("focus", showTooltip);
    reference.removeEventListener("blur", hideTooltip);
  }
});
</script>

<template>
  <div ref="referenceRef" :class="$style.container">
    <slot></slot>
  </div>

  <template v-if="overlayAppendToBody">
    <Teleport to="body">
      <FloatingElement>
        <slot name="content"></slot>
      </FloatingElement>
    </Teleport>
  </template>
  <template v-else>
    <FloatingElement>
      <slot name="content"></slot>
    </FloatingElement>
  </template>
</template>

<style module>
.container {
  display: inline-block;
}
</style>
