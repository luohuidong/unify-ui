<script setup lang="ts">
import { EzButton } from "@/components";
import Popup from "../index.vue";
</script>

<template>
  <div class="container">
    <div>
      <Popup placement="top">
        <EzButton>top black</EzButton>

        <template #content>
          <div class="box">top</div>
        </template>
      </Popup>
    </div>

    <div>
      <Popup placement="bottom" append-to-body background-color="green">
        <EzButton>bottom green</EzButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </Popup>
    </div>

    <div>
      <Popup placement="left" background-color="red">
        <EzButton>left red </EzButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </Popup>
    </div>

    <div>
      <Popup placement="right" background-color="blue">
        <EzButton>right blue</EzButton>

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
