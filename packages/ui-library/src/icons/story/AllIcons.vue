<script setup lang="ts">
import ArrowLeft from '../assets/ArrowLeft.vue'
import ArrowRight from '../assets/ArrowRight.vue'
import Close from '../assets/Close.vue'

</script>

<template>
<div class="container">
    <div class="icon-wrapper">
    <div><ArrowLeft /></div>
    <div>ArrowLeft</div>
  </div>
    <div class="icon-wrapper">
    <div><ArrowRight /></div>
    <div>ArrowRight</div>
  </div>
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
