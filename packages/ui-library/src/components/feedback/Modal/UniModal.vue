<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

import UniBaseModal from "./UniBaseModal.vue";

withDefaults(
  defineProps<{
    visible: boolean;
    title?: string;
    supportingText?: string;
    confirmText?: string;
    cancelText?: string;
    modalClass?: string;
  }>(),
  {
    title: undefined,
    supportingText: undefined,
    confirmText: undefined,
    cancelText: undefined,
    modalClass: undefined,
  }
);

const emits = defineEmits<{
  (e: "click:confirm-button"): void;
  (e: "click:cancel-button"): void;
  (e: "press:keyboard-escape-key"): void;
}>();

function handleCancelButtonClick() {
  emits("click:cancel-button");
}

function handleConfirmButtonClick() {
  emits("click:confirm-button");
}

function handleKeyboardEscapeKey(event: KeyboardEvent) {
  if (event.key.toLowerCase() === "escape") {
    emits("press:keyboard-escape-key");
  }
}
onMounted(() => {
  document.addEventListener("keyup", handleKeyboardEscapeKey);
});
onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyboardEscapeKey);
});
</script>

<template>
  <teleport to="body">
    <Transition
      :enter-active-class="$style['transition--enter-active']"
      :enter-from-class="$style['transition--enter-from']"
      :leave-active-class="$style['transition--leave-active']"
      :leave-to-class="$style['transition--leave-to']"
    >
      <UniBaseModal
        :title="title"
        :supporting-text="supportingText"
        :visible="visible"
        :confirm-text="confirmText"
        :cancel-text="cancelText"
        :modal-class="modalClass"
        @click:confirm-button="handleConfirmButtonClick"
        @click:cancel-button="handleCancelButtonClick"
      >
        <template #title>
          <slot name="title"></slot>
        </template>

        <slot></slot>

        <template #actions>
          <slot name="actions"></slot>
        </template>
      </UniBaseModal>
    </Transition>
  </teleport>
</template>

<style lang="scss" module>
@use "sass:map";
@use "unify-ui/styles/color";
@use "unify-ui/styles/type";

.transition--enter-active,
.transition--leave-active {
  transition: opacity 0.2s ease;
}

.transition--enter-from,
.transition--leave-to {
  opacity: 0;
}
</style>
