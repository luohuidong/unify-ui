<script setup lang="ts">
import { UniButton, useMessage } from "@/index";

const { message } = useMessage();

function handleClick() {
  message({
    text: "测试",
  });
}
</script>

<template>
  <UniButton type="soft" @click="handleClick">添加 message</UniButton>
</template>
