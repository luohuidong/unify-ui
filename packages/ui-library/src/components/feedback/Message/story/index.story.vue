<script setup lang="ts">
import { UniButton, useMessage } from "@/components";

const { message } = useMessage();

function handleClick() {
  message({
    text: "测试",
  });
}
</script>

<template>
  <Story title="Feedback/Message">
    <UniButton type="soft" @click="handleClick">添加 message</UniButton>
  </Story>
</template>
