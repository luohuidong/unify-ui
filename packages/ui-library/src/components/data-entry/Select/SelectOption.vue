<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniSelectOption",
});
</script>

<script setup lang="ts">
import { watch } from "vue";
import { Tick as TickIcon } from "@/icons";
import { useStore } from "./composables/useStore";
import type { Value } from "./types";

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
      <div :class="[$style['content'], { [$style['content--hover']]: !disabled }]">
        <span
          :class="[
            $style['content__label'],
            {
              [$style['content__label--active']]: !disabled && value === rootProps.modelValue,
              [$style['content__label--disabled']]: disabled,
            },
          ]"
        >
          {{ label }}
        </span>
        <tick-icon
          v-if="value === rootProps.modelValue"
          :class="[$style['content__icon'], { [$style['content__icon--disabled']]: disabled }]"
        ></tick-icon>
      </div>
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

.content {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content--hover:hover .content__icon {
  color: #ffffff;
}

.content__label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.content__label--active {
  font-weight: bolder;
}

.content__label--disabled {
  color: form.$font-color-disabled;
}

.content__icon {
  width: 16px;
  height: 16px;
  margin-left: 8px;
  color: color.$indigo-600;
}

.content__icon--disabled {
  color: form.$font-color-disabled;
}
</style>
