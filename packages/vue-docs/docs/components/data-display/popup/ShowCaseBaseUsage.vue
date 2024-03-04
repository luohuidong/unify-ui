<script setup lang="ts">
import { UniButton, UniPopup } from "unify-ui";
</script>

<template>
  <div class="container">
    <div>
      <UniPopup placement="top">
        <UniButton type="soft">top</UniButton>

        <template #content>
          <div class="box">top</div>
        </template>
      </UniPopup>
    </div>

    <div>
      <UniPopup placement="bottom" background-color="green">
        <UniButton type="soft">bottom</UniButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </UniPopup>
    </div>

    <div>
      <UniPopup placement="left" background-color="red">
        <UniButton type="soft">left</UniButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </UniPopup>
    </div>

    <div>
      <UniPopup placement="right" background-color="blue">
        <UniButton type="soft">right</UniButton>

        <template #content>
          <div class="box">right</div>
        </template>
      </UniPopup>
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
