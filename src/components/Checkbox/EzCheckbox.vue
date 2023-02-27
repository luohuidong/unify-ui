<script setup lang="ts">
import { computed } from "vue";

import Tick from "./icons/TickIcon.vue";
import IndeterminateIcon from "./icons/IndeterminateIcon.vue";

const props = withDefaults(
  defineProps<{
    label?: string;
    modelValue: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
  }>(),
  {
    label: "",
    disabled: false,
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", checked: boolean): void;
  (e: "change", checked: boolean): void;
}>();

function handleChange(e: Event) {
  const checked = (e.target as HTMLInputElement).checked;
  if (props.disabled === false) {
    emit("update:modelValue", checked);
    emit("change", checked);
  }
}

const cursor = computed(() => (props.disabled ? "not-allowed" : "pointer"));
</script>

<template>
  <label :class="$style.container">
    <input
      :class="$style.input"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="handleChange"
    />
    <div v-if="indeterminate" :class="$style.indeterminate">
      <IndeterminateIcon :width="14" :height="14"></IndeterminateIcon>
    </div>
    <div v-else :class="$style.checkmark">
      <Tick v-if="modelValue"></Tick>
    </div>

    <span v-if="label" :class="$style.label">{{ label }}</span>
  </label>
</template>

<style lang="scss" module>
$active-color: #037aff;
$hover-color: #0261cc;
%square {
  height: 14px;
  width: 14px;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2px;
}

.container {
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

  &:hover {
    background-color: $hover-color;
    border-color: $hover-color;
  }
}

// custom checkbox
.checkmark {
  @extend %square;

  color: white;
  background: white;
  border: 1px solid rgba(206, 206, 206, 1);
}

// When the checkbox is disabled, add grey background color
.input:disabled ~ .checkmark {
  color: #a8abb2;
  background-color: #f4f4f4;
  cursor: not-allowed;
}

// When the checkbox is checked, add a blue background and a white tick
.input:not(:disabled):checked ~ .checkmark {
  color: white;
  background: $active-color;
  border: 1px solid $active-color;
}

// On mouse-over, add a background color
.container:hover > .input:not(:disabled) {
  // When the checkbox is checked, add a blue background
  &:checked ~ .checkmark {
    background-color: $hover-color;
  }

  // When the checkbox is not checked, add a grey background
  &:not(:checked) ~ .checkmark {
    border: 1px solid $hover-color;
  }
}

.label {
  padding: 0 8px;
}
</style>
