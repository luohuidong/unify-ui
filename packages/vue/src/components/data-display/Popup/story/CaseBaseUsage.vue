<script setup lang="ts">
import { UniButton } from "@/index";
import Popup from "../index.vue";
</script>

<template>
  <div class="container">
    <div>
      <Popup placement="top">
        <UniButton>top</UniButton>

        <template #content>
          <div class="box">top</div>
        </template>
      </Popup>
    </div>

    <div>
      <Popup placement="bottom">
        <UniButton>bottom</UniButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </Popup>
    </div>

    <div>
      <Popup placement="left">
        <UniButton>left</UniButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </Popup>
    </div>

    <div>
      <Popup placement="right">
        <UniButton>right</UniButton>

        <template #content>
          <div class="box">right</div>
        </template>
      </Popup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 300px);
  align-items: center;
  justify-items: center;
}

.box {
  height: 100px;
  width: 100px;
}
</style>
