<script setup lang="ts">
import { EzButton } from "@/components";
import { useEzConfirmModal } from "../useEzConfirmModal";

const { confirm } = useEzConfirmModal();

async function handleConfirmDialogButton() {
  try {
    await confirm({
      title: "Tips",
      supportingText: "Are you sure you want to delete this record?",
    });
    console.log("confirm");
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <EzButton type="soft" @click="handleConfirmDialogButton">confirm Dialog</EzButton>
</template>
