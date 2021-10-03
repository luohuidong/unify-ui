<script setup lang="ts">
import Button from "./components/Button";
</script>

<template>
  <Button>text button</Button>
  <Button type="outlined">outlined button</Button>
  <Button type="contained">outlined button</Button>
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
