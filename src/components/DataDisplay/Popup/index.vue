<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzPopover",
});
</script>

<script lang="ts" setup>
import { onMounted, watch } from "vue";

import FloatingElement from "./FloatingElement.vue";
import { useProvide, useTooltipUtils, useAddEventListener } from "./composable";
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
    visible?: boolean;
    disabled?: boolean;
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

useAddEventListener({
  referenceRef,
  floatingRef,
  rootProps: props,
  showTooltip,
  hideTooltip,
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
