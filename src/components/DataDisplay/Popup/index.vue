<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzPopover",
});
</script>

<script lang="ts" setup>
import { onMounted, onUnmounted, watch } from "vue";

import FloatingElement from "./FloatingElement.vue";
import { useProvide, useTooltipUtils } from "./composable";
import type { RootEmits } from "./types";

const props = withDefaults(
  defineProps<{
    placement: "top" | "bottom" | "left" | "right";
    appendToBody?: boolean;
    overlayClassName?: string;
    backgroundColor?: string;
    fontColor?: string;
    showArrow?: boolean;
    trigger?: "hover" | "click" | "focus" | "controlled";
    /** visible prop only valid when the trigger is "controlled" */
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

const emits: RootEmits = defineEmits<{
  (e: "update:visible", visible: boolean): void;
}>();

const { referenceRef, floatingRef, floatingArrowRef } = useProvide(props, emits);

const { showTooltip, hideTooltip } = useTooltipUtils({
  referenceRef,
  floatingRef,
  floatingArrowRef,
  rootProps: props,
});

onMounted(() => {
  if (props.visible) {
    showTooltip();
  } else {
    hideTooltip();
  }
});

watch(
  () => props.visible,
  (visible) => {
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

  reference.removeEventListener("mouseenter", showTooltip);
  reference.removeEventListener("mouseleave", hideTooltip);

  reference.removeEventListener("click", showTooltip);
  document.body.removeEventListener("click", handleBodyClick);
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
