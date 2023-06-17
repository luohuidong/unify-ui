<script setup lang="ts">
import { UniButton } from "@/components";
import Popup from "../index.vue";
</script>

<template>
  <div class="container">
    <div>
      <Popup placement="top" :show-arrow="false">
        <UniButton>top black</UniButton>

        <template #content>
          <div class="box">top</div>
        </template>
      </Popup>
    </div>

    <div>
      <Popup placement="bottom" append-to-body background-color="green">
        <UniButton>bottom green</UniButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </Popup>
    </div>

    <div>
      <Popup placement="left" background-color="red">
        <UniButton>left red</UniButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </Popup>
    </div>

    <div>
      <Popup placement="right" background-color="blue">
        <UniButton>right blue</UniButton>

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
  grid-template-columns: 400px 400px;
  grid-template-rows: 400px;
  align-items: center;
  justify-items: center;
}

.box {
  height: 100px;
  width: 100px;
}
</style>
