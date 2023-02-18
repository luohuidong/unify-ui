<script setup lang="ts">
import { EzButton, useMessage } from "@/components";

const { message } = useMessage();

function handleClick() {
  message({
    text: "测试",
  });
}
</script>

<template>
  <Story title="Feedback/Message">
    <EzButton type="contained" text="添加 message" @click="handleClick"></EzButton>
  </Story>
</template>
