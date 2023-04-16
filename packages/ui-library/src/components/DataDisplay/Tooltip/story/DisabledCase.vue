<script setup lang="ts">
import { ref } from "vue";
import { EzButton } from "@/components";
import EzTooltip from "../index.vue";

const disabled = ref(false);
function handleClick() {
  disabled.value = !disabled.value;
}
</script>

<template>
  <EzButton @click="handleClick">Click button to change tooltip disabled</EzButton>

  <div>
    <EzTooltip title="Disabled Case" placement="bottom" :disabled="disabled">
      <div>Tooltip disabled: {{ disabled }}</div>
    </EzTooltip>
  </div>
</template>

<style lang="scss" module></style>
