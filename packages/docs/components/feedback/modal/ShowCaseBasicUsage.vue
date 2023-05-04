<script setup lang="ts">
import { ref } from "vue";
import { EzModal, EzButton } from "@easy-ui-team/easy-ui";

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
  <div>
    <EzButton type="soft" @click="handleButtonClick">Open the Modal</EzButton>

    <EzModal
      :visible="visible"
      title="Tips"
      supporting-text="Are you sure you want to delete this record?"
      @click:confirm-button="handleConfirm"
      @click:cancel-button="handleCancel"
      @press:keyboard-escape-key="handleKeyboardEscapeKey"
    ></EzModal>
  </div>
</template>

<style lang="scss" scoped></style>
