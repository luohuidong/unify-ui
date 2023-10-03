<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniSelect",
});
</script>

<script setup lang="ts">
import { UniPopup } from "@/components";
import type { SelectProps, SelectEmits } from "./types";
import { useProvideStore, useDocumentClick } from "./composables";

import SelectTrigger from "./SelectTrigger.vue";
import SelectSearchbox from "./SelectSearchbox.vue";
import SelectLoading from "./SelectLoading.vue";

const props = defineProps<SelectProps>();
const emit = defineEmits<SelectEmits>();

const { state, triggerRef, optionsRef } = useProvideStore(props, emit);

useDocumentClick({
  triggerRef,
  optionsRef,
  state,
});
</script>

<template>
  <uni-popup placement="bottom" trigger="controlled" :visible="state.popupVisible" :show-arrow="false">
    <select-trigger :disabled="disabled"></select-trigger>

    <template #content>
      <ul
        :ref="(el) => (optionsRef = el as HTMLUListElement)"
        :class="$style['options']"
        :style="{ width: `${state.floatingElementWidth}px` }"
      >
        <select-searchbox v-if="localSearch || remoteSearch"></select-searchbox>

        <template v-if="loading">
          <select-loading></select-loading>
        </template>

        <template v-else>
          <slot></slot>
        </template>
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
