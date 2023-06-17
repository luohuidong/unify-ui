<script setup lang="ts">
import { ref } from "vue";
import { UniButton } from "@/components";
import UniPopup from "../index.vue";

const visible = ref(true);
function handleClick() {
  visible.value = !visible.value;
}
</script>

<template>
  <div :style="{ height: '100vh' }">
    <div :style="{ marginBottom: '100px' }">
      <UniPopup placement="bottom" trigger="click">
        <UniButton>Trigger: click</UniButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </UniPopup>
    </div>

    <div :style="{ marginBottom: '100px' }">
      <UniPopup placement="bottom">
        <UniButton>Trigger: hover</UniButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </UniPopup>
    </div>

    <div>
      <UniPopup placement="bottom" trigger="controlled" :visible="visible">
        <UniButton @click="handleClick">Trigger: Controlled</UniButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </UniPopup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  height: 100px;
  width: 100px;
}
</style>
