<script setup lang="ts">
import { Button } from "@/lib/components";

import Popup from "../index.vue";
</script>

<template>
  <Story title="Date Display/Popup">
    <div class="container">
      <div>
        <Popup overlay-placement="top">
          <Button type="text" text="top black" />

          <template #content>
            <div class="box">top</div>
          </template>
        </Popup>
      </div>

      <div>
        <Popup overlay-placement="bottom" overlay-append-to-body overlay-background-color="green">
          <Button type="text" text="bottom green" />

          <template #content>
            <div class="box">bottom</div>
          </template>
        </Popup>
      </div>

      <div>
        <Popup overlay-placement="left" overlay-background-color="red">
          <Button type="text" text="left red" />

          <template #content>
            <div class="box">bottom</div>
          </template>
        </Popup>
      </div>

      <div>
        <Popup overlay-placement="right" overlay-background-color="blue">
          <Button type="text" text="right blue" />

          <template #content>
            <div class="box">right</div>
          </template>
        </Popup>
      </div>
    </div>
  </Story>
</template>

<style scoped>
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
