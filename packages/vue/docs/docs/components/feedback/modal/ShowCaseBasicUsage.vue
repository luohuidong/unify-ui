<script setup lang="ts">
import { ref } from "vue";
import { UniModal, UniButton } from "unify-ui";

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
  <UniButton type="soft" @click="handleButtonClick">Open the Modal</UniButton>

  <UniModal
    :visible="visible"
    title="Tips"
    supporting-text="Are you sure you want to delete this record?"
    @click:confirm-button="handleConfirm"
    @click:cancel-button="handleCancel"
    @press:keyboard-escape-key="handleKeyboardEscapeKey"
  ></UniModal>
</template>
