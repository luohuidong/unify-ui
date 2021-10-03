<script setup lang="ts">
import Button from "./components/Button";

function handleClick(event: MouseEvent) {
  console.log("🚀 ~ file: App.vue ~ line 5 ~ handleClick ~ event", event);
}
</script>

<template>
  <Button @click="handleClick">text button</Button>
  <Button type="outlined">outlined button</Button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  justify-content: center;
}
</style>
