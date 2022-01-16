<script setup lang="ts">
import { Button, useMessage } from "../components";

const { message } = useMessage();

function handleClick() {
  message({
    text: "测试",
  });
}
</script>

<template>
  <Button type="contained" text="添加 message" @click="handleClick"></Button>
</template>
