<script setup lang="ts">
import { ref } from "vue";
import { EzButton } from "@/components";

import EzModal from "../EzModal.vue";

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
  <EzButton type="soft" @click="handleButtonClick">Open the Modal</EzButton>

  <EzModal
    :visible="visible"
    title="Tips"
    supporting-text="Are you sure you want to delete this record?"
    @click:confirm-button="handleConfirm"
    @click:cancel-button="handleCancel"
    @press:keyboard-escape-key="handleKeyboardEscapeKey"
  ></EzModal>
</template>

<style lang="scss" scoped></style>
