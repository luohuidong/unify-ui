<route lang="yaml">
name: Dialog
meta:
  title: 对话框 (Dialog)
</route>

<script setup lang="ts">
import { ref } from "vue";

import { ConfirmDialog, useAlertDialog, Button } from "@/lib/components";

const { confirm } = useAlertDialog();
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

function handleConfirmDialogButton() {
  confirm({
    title: "提示",
    supportingText: "是否确定删除该记录",
    onConfirm: () => {},
    onCancel: () => {},
  });
}
</script>

<template>
  <div>
    <Button type="text" text="打开 Dialog" @click="handleButtonClick"></Button>
    <ConfirmDialog
      :visible="visible"
      title="提示"
      supporting-text="是否确定删除该记录？"
      @click:confirm-button="handleConfirm"
      @click:cancel-button="handleCancel"
      @press:keyboard-escape-key="handleKeyboardEscapeKey"
    ></ConfirmDialog>

    <Button
      type="contained"
      text="confirm Dialog"
      @click="handleConfirmDialogButton"
    ></Button>
  </div>
</template>
