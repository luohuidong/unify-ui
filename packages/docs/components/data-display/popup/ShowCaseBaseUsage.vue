<script setup lang="ts">
import { EzButton, EzPopup } from "@luohuidong/easy-ui";
</script>

<template>
  <div class="container">
    <div>
      <EzPopup placement="top">
        <EzButton type="soft">top black</EzButton>

        <template #content>
          <div class="box">top</div>
        </template>
      </EzPopup>
    </div>

    <div>
      <EzPopup placement="bottom" append-to-body background-color="green">
        <EzButton type="soft">bottom green</EzButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </EzPopup>
    </div>

    <div>
      <EzPopup placement="left" background-color="red">
        <EzButton type="soft">left red </EzButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </EzPopup>
    </div>

    <div>
      <EzPopup placement="right" background-color="blue">
        <EzButton type="soft">right blue</EzButton>

        <template #content>
          <div class="box">right</div>
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
