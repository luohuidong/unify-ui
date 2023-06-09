<script setup lang="ts">
import { UniButton, UniModal, useUniConfirmModal, UniConfigProvider } from "@/components";
import { ref } from "vue";

const visible = ref(false);
const { confirm } = useUniConfirmModal();

const locale = ref<"en-US" | "zh-CN">("en-US");

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
    <UniConfigProvider :locale="locale">
      <div>
        <UniButton @click="locale = 'en-US'">en-US</UniButton>
        <UniButton @click="locale = 'zh-CN'">zh-CN</UniButton>
        <span>Current Language: {{ locale }}</span>
      </div>

      <div>
        <UniButton @click="visible = true">Open Modal</UniButton>
        <UniButton @click="handleConfirmDialogButton">Open ConfirmModal</UniButton>
        <UniModal
          :visible="visible"
          @click:confirm-button="visible = false"
          @click:cancel-button="visible = false"
        >
          balabala...
        </UniModal>
      </div>
    </UniConfigProvider>
  </div>
</template>

<style lang="scss" scoped></style>
