<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniPopup",
});
</script>

<script lang="ts" setup>
import { onMounted, watch } from "vue";

import FloatingElement from "./FloatingElement.vue";
import { useProvide, useTooltipUtils, useAddEventListener } from "./composable";
import type { RootEmits, RootProps } from "./types";

const props = withDefaults(defineProps<RootProps>(), {
  overlayClassName: void 0,
  showArrow: true,
  trigger: "hover",
  offset: 6,
  appendToBody: true,
});

const emits = defineEmits<RootEmits>();

const { referenceRef, floatingRef, floatingArrowRef } = useProvide(props);

const { showPopup, hidePopup } = useTooltipUtils({
  referenceRef,
  floatingRef,
  floatingArrowRef,
  rootProps: props,
  rootEmits: emits,
});

useAddEventListener({
  referenceRef,
  floatingRef,
  rootProps: props,
  showPopup,
  hidePopup,
});

onMounted(() => {
  if (props.visible) {
    showPopup();
  } else {
    hidePopup();
  }
});

watch(
  () => props.visible,
  (visible) => {
    if (visible) {
      showPopup();
    } else {
      hidePopup();
    }
  }
);

defineExpose({
  showPopup, // () => void
  hidePopup, // () => void
});
</script>

<template>
  <div ref="referenceRef" :class="$style.popup">
    <slot></slot>

    <Teleport to="body" :disabled="!appendToBody">
      <FloatingElement>
        <slot name="content"></slot>
      </FloatingElement>
    </Teleport>
  </div>
</template>

<style module>
.popup {
  position: relative;
  display: inline-block;
}
</style>
