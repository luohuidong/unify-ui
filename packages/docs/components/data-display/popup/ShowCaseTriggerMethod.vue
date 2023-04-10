<script setup lang="ts">
import { ref } from "vue";
import { EzButton, EzPopup } from "@luohuidong/easy-ui";

const visible = ref(true);
function handleClick() {
  visible.value = !visible.value;
}
</script>

<template>
  <div class="container">
    <div>
      <EzPopup placement="bottom" trigger="click" append-to-body>
        <EzButton type="soft">Trigger: click</EzButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </EzPopup>
    </div>

    <div>
      <EzPopup placement="bottom" append-to-body>
        <EzButton type="soft">Trigger: hover</EzButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </EzPopup>
    </div>

    <div>
      <EzPopup
        placement="bottom"
        append-to-body
        trigger="controlled"
        :visible="visible"
      >
        <EzButton type="soft" @click="handleClick">
          Trigger: Controlled
        </EzButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </EzPopup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 200px 200px;
  align-items: center;
  justify-items: center;
}

.box {
  height: 100px;
  width: 100px;
}
</style>
