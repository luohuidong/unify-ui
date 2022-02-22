<route lang="yaml">
name: Navigation
meta:
  title: 导航侧边栏 (Navigation)
</route>

<script setup lang="ts">
import { ref } from "vue";

import { ModalDrawer, Button } from "../components";

const visible = ref(false);
function handleClick() {
  visible.value = true;
}
</script>

<template>
  <Button text="打开" type="contained" @click="handleClick"></Button>
  <ModalDrawer v-model:visible="visible"></ModalDrawer>
</template>
