<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniSelectOption",
});
</script>

<script setup lang="ts">
import { watch, computed } from "vue";

import { useStore } from "./composables/useStore";
import type { OptionValue } from "./types";
import SelectOptionFallbackContent from "./SelectOptionFallbackContent.vue";

const props = defineProps<{
  label: string;
  value: OptionValue;
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

function handleItemClick(value: OptionValue) {
  if (props.disabled) return;

  if (rootProps.multiple) {
    const tmpModelValue = new Set(rootProps.modelValue as Set<OptionValue> | undefined);

    if (tmpModelValue.has(value)) {
      tmpModelValue.delete(value);
    } else {
      tmpModelValue.add(value);
    }

    rootEmits("update:modelValue", tmpModelValue);
    rootEmits("change", tmpModelValue);
  } else {
    rootEmits("update:modelValue", value);
    rootEmits("change", value);
    actions.visibleChange();
  }
}

const hiddenOption = computed(
  () => rootProps.localSearch && state.searchInputValue && !props.label.includes(state.searchInputValue)
);

const isActive = computed(() => {
  if (rootProps.multiple) {
    return (rootProps.modelValue as Set<OptionValue> | undefined)?.has(props.value);
  }

  return rootProps.modelValue === props.value;
});
</script>

<template>
  <li
    v-show="!hiddenOption"
    :class="[$style['option'], { [$style['option--hover']]: !disabled, [$style['option--disabled']]: disabled }]"
    @click="handleItemClick(value)"
  >
    <slot name="option">
      <SelectOptionFallbackContent :label="label" :disabled="disabled" :is-active="isActive" />
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
