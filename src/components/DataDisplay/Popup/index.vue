<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzPopover",
});
</script>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, provide, watch } from "vue";
import { computePosition, flip, shift, offset, arrow, autoUpdate } from "@floating-ui/dom";

import * as provideKeys from "./provideKeys";
import FloatingElement from "./FloatingElement.vue";

const props = withDefaults(
  defineProps<{
    placement: "top" | "bottom" | "left" | "right";
    appendToBody?: boolean;
    overlayClassName?: string;
    backgroundColor?: string;
    fontColor?: string;
    showArrow?: boolean;
    trigger?: "hover" | "click" | "focus" | "controlled";
    visible?: boolean;
  }>(),
  {
    appendToBody: false,
    overlayClassName: void 0,
    backgroundColor: void 0,
    fontColor: void 0,
    showArrow: true,
    trigger: "hover",
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
      placement: props.placement,
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
  if (props.trigger !== "controlled") return;

  if (props.visible) {
    showTooltip();
  } else {
    hideTooltip();
  }
});

watch(
  () => props.visible,
  (visible) => {
    if (props.trigger !== "controlled") return;

    if (visible) {
      showTooltip();
    } else {
      hideTooltip();
    }
  }
);

function handleBodyClick(e: MouseEvent) {
  const path = e.composedPath();

  const reference = referenceRef.value;
  const floating = floatingRef.value;
  if (!reference || !floating) return;
  if (!path.includes(reference) && !path.includes(floating)) {
    hideTooltip();
  }
}

onMounted(() => {
  const reference = referenceRef.value;
  if (!reference) return;

  if (props.trigger === "focus") {
    reference.addEventListener("focus", showTooltip);
    reference.addEventListener("blur", hideTooltip);
  }

  if (props.trigger === "hover") {
    reference.addEventListener("mouseenter", showTooltip);
    reference.addEventListener("mouseleave", hideTooltip);
  }

  if (props.trigger === "click") {
    reference.addEventListener("click", showTooltip);
    document.body.addEventListener("click", handleBodyClick);
  }
});

onUnmounted(() => {
  const reference = referenceRef.value;
  if (!reference) return;

  reference.removeEventListener("focus", showTooltip);
  reference.removeEventListener("blur", hideTooltip);

  if (props.trigger === "hover") {
    reference.removeEventListener("mouseenter", showTooltip);
    reference.removeEventListener("mouseleave", hideTooltip);
  }

  if (props.trigger === "click") {
    reference.removeEventListener("click", showTooltip);
    document.body.removeEventListener("click", handleBodyClick);
  }
});
</script>

<template>
  <div ref="referenceRef" :class="$style.container">
    <slot></slot>
  </div>

  <template v-if="appendToBody">
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
