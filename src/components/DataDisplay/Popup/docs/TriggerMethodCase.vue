<script setup lang="ts">
import { ref } from "vue";
import { EzButton } from "@/components";
import EzPopup from "../index.vue";

const visible = ref(true);
function handleClick() {
  visible.value = !visible.value;
}
</script>

<template>
  <div :style="{ height: '100vh' }">
    <div :style="{ marginBottom: '100px' }">
      <EzPopup placement="bottom" trigger="click" append-to-body>
        <EzButton>Trigger: click</EzButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </EzPopup>
    </div>

    <div :style="{ marginBottom: '100px' }">
      <EzPopup placement="bottom" append-to-body>
        <EzButton>Trigger: hover</EzButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </EzPopup>
    </div>

    <div>
      <EzPopup placement="bottom" append-to-body trigger="controlled" :visible="visible">
        <EzButton @click="handleClick">Trigger: Controlled</EzButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </EzPopup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  height: 100px;
  width: 100px;
}
</style>
