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
  <div class="container">
    <div>
      <UniPopup placement="bottom" trigger="click">
        <UniButton>Trigger: click</UniButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </UniPopup>
    </div>

    <div>
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
.container {
  height: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 300px);
  justify-items: center;
  align-items: center;
}

.box {
  height: 100px;
  width: 100px;
}
</style>
