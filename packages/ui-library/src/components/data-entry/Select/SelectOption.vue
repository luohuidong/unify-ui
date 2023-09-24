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
  rootEmits("update:modelValue", value);
  rootEmits("change", value);
  actions.visibleChange();
}
</script>

<template>
  <li :class="$style['option']" @click="handleItemClick(value)">
    <slot name="option">
      <div :class="$style['option__default-content']">
        <span
          :class="{
            [$style['option__default-content-label']]: true,
            [$style['option__default-content-label--active']]: value === rootProps.modelValue,
          }"
        >
          {{ label }}
        </span>
        <tick-icon v-if="value === rootProps.modelValue" :class="$style['option__default-content-icon']"></tick-icon>
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

  &:hover {
    color: #ffffff;
    background: form.$background-color-active;
  }
}

.option__default-content {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover .option__default-content-icon {
    color: #ffffff;
  }

  .option__default-content-label {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .option__default-content-label--active {
    font-weight: bolder;
  }

  .option__default-content-icon {
    width: 16px;
    height: 16px;
    margin-left: 8px;
    color: color.$indigo-600;
  }
}
</style>
