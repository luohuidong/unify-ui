<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniSelect",
});
</script>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import { UniPopup } from "@/components";
import type { SelectProps, SelectEmits } from "./types";
import SelectTrigger from "./SelectTrigger.vue";
import { useProvideStore } from "./composables/useStore";

const props = defineProps<SelectProps>();
const emit = defineEmits<SelectEmits>();

const { triggerRef, state } = useProvideStore(props, emit);

const optionsRef = ref<HTMLUListElement>();

function handleDocumentClick(e: MouseEvent) {
  if (!triggerRef.value || !optionsRef.value) return;

  const path = e.composedPath();
  if (!path.includes(triggerRef.value) && !path.includes(optionsRef.value)) {
    state.popupVisible = false;
  }
}
onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
});
onUnmounted(() => {
  document.removeEventListener("click", handleDocumentClick);
});
</script>

<template>
  <uni-popup placement="bottom" trigger="controlled" :visible="state.popupVisible" :show-arrow="false">
    <select-trigger></select-trigger>

    <template #content>
      <ul ref="optionsRef" :class="$style['options']" :style="{ width: `${state.floatingElementWidth}px` }">
        <slot></slot>
      </ul>
    </template>
  </uni-popup>
</template>

<style lang="scss" module>
.options {
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 4px;
}
</style>
