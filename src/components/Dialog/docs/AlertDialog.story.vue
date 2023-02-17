<script setup lang="ts">
import { useAlertDialog, Button } from "@/components";

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
    <Button type="contained" text="confirm Dialog" @click="handleConfirmDialogButton"></Button>
  </Story>
</template>
