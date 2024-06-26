<script setup lang="ts">
import { ref } from "vue";
import { UniButton, UniPopup } from "unify-ui";

const visible = ref(true);
function handleClick() {
  visible.value = !visible.value;
}
</script>

<template>
  <div class="container">
    <div>
      <UniPopup placement="bottom" trigger="click">
        <UniButton type="soft">Trigger: click</UniButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </UniPopup>
    </div>

    <div>
      <UniPopup placement="bottom">
        <UniButton type="soft">Trigger: hover</UniButton>

        <template #content>
          <div class="box">bottom</div>
        </template>
      </UniPopup>
    </div>

    <div>
      <UniPopup placement="bottom" trigger="controlled" :visible="visible">
        <UniButton type="soft" @click="handleClick"> Trigger: Controlled </UniButton>

        <template #content>
          <div class="box">bottom</div>
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
