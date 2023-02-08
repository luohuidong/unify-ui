<script setup lang="ts">
import { Button, useMessage } from "@/lib/components";

const { message } = useMessage();

function handleClick() {
  message({
    text: "测试",
  });
}
</script>

<template>
  <Story title="Message">
    <Button type="contained" text="添加 message" @click="handleClick"></Button>
  </Story>
</template>
