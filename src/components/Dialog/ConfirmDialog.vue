<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SConfirmDialog",
});
</script>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

import BaseDialog from "./BaseDialog.vue";

withDefaults(
  defineProps<{
    title?: string;
    supportingText: string;
    visible: boolean;
    confirmText?: string;
    cancelText?: string;
  }>(),
  {
    title: "",
    confirmText: "确定",
    cancelText: "取消",
  }
);

const emits = defineEmits([
  "click:confirm-button",
  "click:cancel-button",
  "press:keyboard-escape-key",
]);

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
    <BaseDialog
      :title="title"
      :supporting-text="supportingText"
      :visible="visible"
      @click:confirm-button="handleConfirmButtonClick"
      @click:cancel-button="handleCancelButtonClick"
    />
  </teleport>
</template>

<style lang="scss" module></style>
