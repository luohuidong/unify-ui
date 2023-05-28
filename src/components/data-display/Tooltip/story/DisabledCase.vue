<script setup lang="ts">
import { ref } from "vue";
import { UniButton } from "unify-ui/components";
import UniToolTip from "../index.vue";

const disabled = ref(false);
function handleClick() {
  disabled.value = !disabled.value;
}
</script>

<template>
  <UniButton @click="handleClick">Click button to change tooltip disabled</UniButton>

  <div>
    <UniToolTip title="Disabled Case" placement="bottom" :disabled="disabled">
      <div>Tooltip disabled: {{ disabled }}</div>
    </UniToolTip>
  </div>
</template>

<style lang="scss" module></style>
