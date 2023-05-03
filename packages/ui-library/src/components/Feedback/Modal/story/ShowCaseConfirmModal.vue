<script setup lang="ts">
import { EzButton } from "@/components";
import { useEzConfirmModal } from "../useEzConfirmModal";

const { confirm } = useEzConfirmModal();

function handleConfirmDialogButton() {
  confirm({
    title: "Tips",
    supportingText: "Are you sure you want to delete this record?",
    onConfirm: () => {},
    onCancel: () => {},
  });
}
</script>

<template>
  <EzButton type="soft" @click="handleConfirmDialogButton">confirm Dialog</EzButton>
</template>
