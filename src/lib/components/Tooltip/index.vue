<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SToolTip",
});
</script>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  computePosition,
  flip,
  shift,
  offset,
  arrow,
  autoUpdate,
  type Placement,
} from "@floating-ui/dom";

const props = defineProps<{
  title: string;
  placement: Placement;
  appendToBody?: boolean;
}>();

const referenceRef = ref<Element | null>(null);
const floatingRef = ref<HTMLElement | null>(null);
const floatingArrowRef = ref<HTMLElement | null>(null);

function setRef(el: Element | null) {
  referenceRef.value = el;
}

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
  <slot :set-ref="setRef"></slot>

  <Teleport v-if="appendToBody" to="body">
    <div ref="floatingRef" class="tooltip">
      {{ title }}
      <div ref="floatingArrowRef" class="arrow"></div>
    </div>
  </Teleport>

  <div v-else ref="floatingRef" class="tooltip">
    {{ title }}
    <div ref="floatingArrowRef" class="arrow"></div>
  </div>
</template>

<style scoped>
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
