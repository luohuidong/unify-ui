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
});

const emits: RootEmits = defineEmits<{
  (e: "update:visible", visible: boolean): void;
}>();

const { referenceRef, floatingRef, floatingArrowRef } = useProvide(props);

const { showTooltip, hideTooltip } = useTooltipUtils({
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
  <div ref="referenceRef" class="popup">
    <slot></slot>

    <Teleport to="body">
      <FloatingElement>
        <slot name="content"></slot>
      </FloatingElement>
    </Teleport>
  </div>
</template>

<style scoped>
.popup {
  display: inline-block;
}
</style>
