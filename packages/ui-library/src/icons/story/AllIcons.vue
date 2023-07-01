<script setup lang="ts">
import Close from '../assets/Close.vue'

</script>

<template>
<div class="container">
    <div class="icon-wrapper">
    <div><Close /></div>
    <div>Close</div>
  </div>
  
</div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  grid-template-rows: 80px;
}

.icon-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
