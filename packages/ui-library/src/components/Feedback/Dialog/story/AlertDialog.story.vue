<script setup lang="ts">
import { useAlertDialog, EzButton } from "@/components";

const { confirm } = useAlertDialog();

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
  <Story title="Feedback/Dialog/AlertDialog">
    <EzButton type="soft" @click="handleConfirmDialogButton">confirm Dialog</EzButton>
  </Story>
</template>
