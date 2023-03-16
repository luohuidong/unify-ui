<script setup lang="ts">
import { EzButton } from "@/components";

import Popup from "../index.vue";
import VisibleCase from "./VisibleCase.vue";
</script>

<template>
  <Story title="Date Display/Popup">
    <Variant title="default">
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
    </Variant>

    <Variant title="Trigger method">
      <div :style="{ height: '100vh' }">
        <div :style="{ marginBottom: '100px' }">
          <Popup placement="bottom" trigger="click" append-to-body>
            <EzButton>Trigger: click</EzButton>

            <template #content>
              <div class="box">bottom</div>
            </template>
          </Popup>
        </div>

        <div>
          <Popup placement="bottom" append-to-body>
            <EzButton>Trigger: hover</EzButton>

            <template #content>
              <div class="box">bottom</div>
            </template>
          </Popup>
        </div>
      </div>
    </Variant>

    <Variant title="Controlled Mode">
      <div :style="{ height: '100vh' }">
        <VisibleCase></VisibleCase>
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
