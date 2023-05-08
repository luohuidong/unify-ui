<script setup lang="ts">
import { computed, inject } from "vue";

import Tick from "./icons/TickIcon.vue";
import IndeterminateIcon from "./icons/IndeterminateIcon.vue";
import type { Value } from "./types";

const props = withDefaults(
  defineProps<{
    label?: string;
    checked?: boolean;
    value?: Value;
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
  | ((checked: boolean, value: Value) => void)
  | undefined;

function handleChange(e: Event) {
  const checked = (e.target as HTMLInputElement).checked;
  if (props.disabled === false) {
    emit("update:checked", checked);
    emit("change", checked);

    props.value !== undefined &&
      handleChangeGroupValue &&
      handleChangeGroupValue(checked, props.value);
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
$active-color: #037aff;
$hover-color: #0261cc;

$border-grey: rgba(206, 206, 206, 1);
$background-grey: #f4f4f4;
$font-grey: #a8abb2;

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
  font-size: 14px;
  user-select: none;
}

.input {
  display: none;
}

.indeterminate {
  @extend %square;

  color: white;
  background: $active-color;
  border: 1px solid $active-color;
}

.input:disabled ~ .indeterminate {
  color: $font-grey;
  background-color: $background-grey;
  border-color: $border-grey;
  cursor: not-allowed;
}

// add icon color, checkmark background color, checkmark border color when checkbox is not hover, not checked, disabled
// not hover - not checked - not disabled
.checkmark {
  @extend %square;

  color: transparent;
  background: white;
  border: 1px solid $border-grey;
}

// not hover - not checked - disabled
.input:disabled ~ .checkmark {
  color: transparent;
  background-color: $background-grey;
  border-color: $border-grey;
  cursor: not-allowed;
}

// not hover - checked - not disabled
.input:checked ~ .checkmark {
  color: white;
  background-color: $active-color;
  border-color: $active-color;
}

// not hover - checked - disabled
.input:checked:disabled ~ .checkmark {
  color: $font-grey;
  background-color: $background-grey;
  border-color: $border-grey;
  cursor: not-allowed;
}

// hover - not checked - not disabled
.label:hover > .checkmark {
  color: transparent;
  background-color: white;
  border-color: $hover-color;
}

// hover - not checked - disabled
.label:hover > .input:disabled ~ .checkmark {
  color: transparent;
  background-color: $background-grey;
  border: 1px solid $border-grey;
  cursor: not-allowed;
}

// hover - checked - not disabled
.label:hover > .input:checked ~ .checkmark {
  color: white;
  background-color: $hover-color;
  border-color: $hover-color;
}

// hover - checked - disabled
.label:hover > .input:checked:disabled ~ .checkmark {
  color: $font-grey;
  background-color: $background-grey;
  border-color: $border-grey;
  cursor: not-allowed;
}

.label__text {
  padding: 0 8px;
}

.input:disabled ~ .label__text--disabled {
  color: #a8abb2;
}
</style>
