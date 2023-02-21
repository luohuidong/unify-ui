<script setup lang="ts">
import { ref } from "vue";
import { EzButton, EzPopup } from "@/components";

const visible = ref(true);
function handleClick() {
  visible.value = !visible.value;
}
</script>

<template>
  <div>
    <div :class="$style.container">
      <div>
        <EzPopup placement="bottom" append-to-body trigger="controlled" :visible="visible">
          <EzButton type="text" text="Controlled Mode" @click="handleClick"></EzButton>

          <template #content>
            <div class="box">bottom</div>
          </template>
        </EzPopup>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  display: flex;
}
</style>
