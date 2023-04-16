<script setup lang="ts">
import { ref } from "vue";
import { EzButton, ConfirmDialog } from "@/components";

const visible = ref(false);

function handleButtonClick() {
  visible.value = true;
}

function handleConfirm() {
  visible.value = false;
}

function handleCancel() {
  visible.value = false;
}

function handleKeyboardEscapeKey() {
  visible.value = false;
}
</script>

<template>
  <Story title="Feedback/Dialog/ConfirmDialog">
    <EzButton type="soft" @click="handleButtonClick">打开 Dialog</EzButton>

    <ConfirmDialog
      :visible="visible"
      title="提示"
      supporting-text="是否确定删除该记录？"
      @click:confirm-button="handleConfirm"
      @click:cancel-button="handleCancel"
      @press:keyboard-escape-key="handleKeyboardEscapeKey"
    ></ConfirmDialog>
  </Story>
</template>
