<script setup lang="ts">
import { ref } from "vue";
import Dialog from "@/components/Dialog";
import Button from "@/components/Button";

const visible = ref(false);

function handleButtonClick() {
  console.log("test");
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
  <div>
    <Button text="打开 Dialog" @click="handleButtonClick"></Button>
    <Dialog
      :visible="visible"
      title="提示"
      supporting-text="是否确定删除该记录？"
      @click:confirm-button="handleConfirm"
      @click:cancel-button="handleCancel"
      @press:keyboard-escape-key="handleKeyboardEscapeKey"
    ></Dialog>
  </div>
</template>
