<script setup lang="ts">
import ArrowLeft from "../assets/ArrowLeft.vue";
import ArrowRight from "../assets/ArrowRight.vue";
import Close from "../assets/Close.vue";
import CloseOutline from "../assets/CloseOutline.vue";
import DoubleArrowLeft from "../assets/DoubleArrowLeft.vue";
import DoubleArrowRight from "../assets/DoubleArrowRight.vue";
import Loading from "../assets/Loading.vue";
import Tick from "../assets/Tick.vue";
</script>

<template>
  <div class="container">
    <div class="icon-wrapper">
      <div><ArrowLeft class="icon" /></div>
      <div>ArrowLeft</div>
    </div>
    <div class="icon-wrapper">
      <div><ArrowRight class="icon" /></div>
      <div>ArrowRight</div>
    </div>
    <div class="icon-wrapper">
      <div><Close class="icon" /></div>
      <div>Close</div>
    </div>
    <div class="icon-wrapper">
      <div><CloseOutline class="icon" /></div>
      <div>CloseOutline</div>
    </div>
    <div class="icon-wrapper">
      <div><DoubleArrowLeft class="icon" /></div>
      <div>DoubleArrowLeft</div>
    </div>
    <div class="icon-wrapper">
      <div><DoubleArrowRight class="icon" /></div>
      <div>DoubleArrowRight</div>
    </div>
    <div class="icon-wrapper">
      <div><Loading class="icon" /></div>
      <div>Loading</div>
    </div>
    <div class="icon-wrapper">
      <div><Tick class="icon" /></div>
      <div>Tick</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: 120px;
}

.icon-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
