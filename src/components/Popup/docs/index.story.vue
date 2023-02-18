<script setup lang="ts">
import { EzButton } from "@/components";

import Popup from "../index.vue";
</script>

<template>
  <Story title="Date Display/Popup">
    <Variant title="default">
      <div class="container">
        <div>
          <Popup placement="top">
            <EzButton type="text" text="top black" />

            <template #content>
              <div class="box">top</div>
            </template>
          </Popup>
        </div>

        <div>
          <Popup placement="bottom" append-to-body background-color="green">
            <EzButton type="text" text="bottom green" />

            <template #content>
              <div class="box">bottom</div>
            </template>
          </Popup>
        </div>

        <div>
          <Popup placement="left" background-color="red">
            <EzButton type="text" text="left red" />

            <template #content>
              <div class="box">bottom</div>
            </template>
          </Popup>
        </div>

        <div>
          <Popup placement="right" background-color="blue">
            <EzButton type="text" text="right blue" />

            <template #content>
              <div class="box">right</div>
            </template>
          </Popup>
        </div>
      </div>
    </Variant>

    <Variant title="Trigger method">
      <div :style="{ height: '100vh' }">
        <div :style="{ marginBottom: '100px' }">
          <Popup placement="bottom" trigger="click" append-to-body>
            <EzButton type="outlined" text="Trigger: click"></EzButton>

            <template #content>
              <div class="box">bottom</div>
            </template>
          </Popup>
        </div>

        <div>
          <Popup placement="bottom" append-to-body>
            <EzButton type="outlined" text="Trigger: hover"></EzButton>

            <template #content>
              <div class="box">bottom</div>
            </template>
          </Popup>
        </div>
      </div>
    </Variant>
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
