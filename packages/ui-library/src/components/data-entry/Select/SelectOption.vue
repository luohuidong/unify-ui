<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniSelectOption",
});
</script>

<script setup lang="ts">
import { watch } from "vue";

import { useStore } from "./composables/useStore";
import type { Value } from "./types";
import SelectOptionFallbackContent from "./SelectOptionFallbackContent.vue";

const props = defineProps<{
  label: string;
  value: Value;
  disabled?: boolean;
}>();

const { actions, rootEmits, rootProps, state } = useStore();

watch(
  [() => props.label, () => props.value],
  ([label, value]) => {
    state.valueLabelMap.set(value, label);
  },
  {
    immediate: true,
  }
);

function handleItemClick(value: Value | Value[]) {
  if (props.disabled) return;
  rootEmits("update:modelValue", value);
  rootEmits("change", value);
  actions.visibleChange();
}
</script>

<template>
  <li
    :class="[$style['option'], { [$style['option--hover']]: !disabled, [$style['option--disabled']]: disabled }]"
    @click="handleItemClick(value)"
  >
    <slot name="option">
      <SelectOptionFallbackContent
        :label="label"
        :disabled="disabled"
        :is-active="value === rootProps.modelValue"
      ></SelectOptionFallbackContent>
    </slot>
  </li>
</template>

<style lang="scss" module>
@use "@/styles/color";
@use "@/styles/form";

.option {
  box-sizing: border-box;
  height: form.$control-height;
  padding: 0 form.$control-padding-x;
  display: flex;
  align-items: center;

  color: form.$font-color;
  font-size: form.$font-size-sm;
  font-weight: normal;
  align-content: center;
  cursor: pointer;
}

.option--hover:hover {
  color: #ffffff;
  background: form.$background-color-active;
}

.option--disabled {
  cursor: not-allowed;
}
</style>
