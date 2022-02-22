<route lang="yaml">
name: Button
meta:
  title: 按钮 (Button)
</route>

<script setup lang="ts">
import { Button } from "@/components/Button";
</script>

<template>
  <Button type="text" text="text button"></Button>
  <Button type="outlined" text="outlined button"></Button>
  <Button type="contained" text="contained button"></Button>
</template>
