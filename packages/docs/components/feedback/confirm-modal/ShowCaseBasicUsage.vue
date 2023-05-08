<script setup lang="ts">
import { useEzConfirmModal, EzButton } from "unify-ui";

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
  <div>
    <EzButton type="soft" @click="handleConfirmDialogButton">
      Show Confirm Dialog
    </EzButton>
  </div>
</template>

<style lang="scss" scoped></style>
