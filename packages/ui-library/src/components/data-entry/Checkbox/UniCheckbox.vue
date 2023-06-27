<script setup lang="ts" generic="V extends string | number">
import { computed, inject } from "vue";

import Tick from "./icons/TickIcon.vue";
import IndeterminateIcon from "./icons/IndeterminateIcon.vue";

const props = withDefaults(
  defineProps<{
    label?: string;
    checked?: boolean;
    value?: V;
    disabled?: boolean;
    indeterminate?: boolean;
  }>(),
  {
    label: "",
    value: void 0,
    disabled: false,
  }
);

const emit = defineEmits<{
  (e: "update:checked", checked: boolean): void;
  (e: "change", checked: boolean): void;
}>();

// use this function when checkbox is inside checkbox group
const handleChangeGroupValue = inject("handleChangeGroupValue", void 0) as
  | ((checked: boolean, value: V) => void)
  | undefined;

function handleChange(e: Event) {
  const checked = (e.target as HTMLInputElement).checked;
  if (!props.disabled) {
    emit("update:checked", checked);
    emit("change", checked);

    props.value !== undefined && handleChangeGroupValue && handleChangeGroupValue(checked, props.value);
  }
}

const cursor = computed(() => (props.disabled ? "not-allowed" : "pointer"));
</script>

<template>
  <label class="label">
    <input
      :checked="checked"
      class="input"
      type="checkbox"
      :value="value"
      :disabled="disabled"
      @change="handleChange"
    />
    <div v-if="indeterminate" class="indeterminate">
      <IndeterminateIcon :width="14" :height="14"></IndeterminateIcon>
    </div>
    <div v-else class="checkmark">
      <Tick></Tick>
    </div>

    <span v-if="label" class="label__text label__text--disabled">
      {{ label }}
    </span>
  </label>
</template>

<style lang="scss" scoped>
@use "@/styles/form";

%square {
  height: 14px;
  width: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  border-radius: 2px;
}

.label {
  height: 26px;
  display: inline-flex;
  align-items: center;
  cursor: v-bind(cursor);
  font-size: form.$font-size-sm;
  user-select: none;
}

.input {
  display: none;
}

.indeterminate {
  @extend %square;

  color: white;
  background: form.$background-color-active;
  border: 1px solid form.$border-color-active;
}

.input:disabled ~ .indeterminate {
  color: form.$font-color-disabled;
  background-color: form.$background-color;
  border-color: form.$border-color;
  cursor: not-allowed;
}

// add icon color, checkmark background color, checkmark border color

// not checked - not disabled
.checkmark {
  @extend %square;

  color: transparent;
  background: form.$background-color;
  border: 1px solid form.$border-color;
}

// not checked - disabled
.input:disabled ~ .checkmark {
  color: transparent;
  background-color: form.$background-color;
  border-color: form.$border-color;
  cursor: not-allowed;
}

// checked - not disabled
.input:checked ~ .checkmark {
  color: white;
  background-color: form.$background-color-active;
  border-color: form.$border-color-active;
}

// checked - disabled
.input:checked:disabled ~ .checkmark {
  color: form.$font-color-disabled;
  background-color: form.$background-color;
  border-color: form.$border-color;
  cursor: not-allowed;
}

.label__text {
  padding: 0 8px;
}

.input:disabled ~ .label__text--disabled {
  color: form.$font-color-disabled;
}
</style>
