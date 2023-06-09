<script setup lang="ts">
import { UniButton } from "@/components";
import { useUniConfirmModal } from "../useUniConfirmModal";

const { confirm } = useUniConfirmModal();

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
  <UniButton type="soft" @click="handleConfirmDialogButton">confirm Dialog</UniButton>
</template>
