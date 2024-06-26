<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectTriggerInput",
});
</script>

<script setup lang="ts">
import { useStore } from "./composables/useStore";
import type { ModelValueSingle } from "./types";

defineProps<{
  disabled?: boolean;
}>();

const { rootProps, state } = useStore();
</script>

<template>
  <input
    :class="[
      $style['input'],
      { [$style['input--disabled']]: disabled, [$style['input--error']]: state.isErrorStatus },
    ]"
    :placeholder="rootProps.placeholder"
    readonly
    :value="
      rootProps.modelValue &&
      state.valueLabelMap.get(rootProps.modelValue as NonNullable<ModelValueSingle>)
    "
    :disabled="disabled"
  />
</template>

<style lang="scss" module>
@use "@/styles/form";

.input {
  box-sizing: border-box;
  height: form.$control-height;
  width: 100%;
  padding: 0 40px 0 12px;
  color: form.$font-color;
  font-size: form.$font-size-sm;
  cursor: pointer;
  border: none;
  outline: none;
}

.input--disabled {
  cursor: not-allowed;
  background-color: form.$background-color-disabled;
}

.input--error {
  color: form.$font-color-error;
}
</style>
