<script setup lang="ts">
import { useUniConfirmModal, UniButton } from "unify-ui";

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
  <UniButton type="soft" @click="handleConfirmDialogButton"> Show Confirm Dialog </UniButton>
</template>
