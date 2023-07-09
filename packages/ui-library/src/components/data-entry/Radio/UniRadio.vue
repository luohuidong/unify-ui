<script setup lang="ts" generic="T extends string | number | symbol">
defineProps<{
  name: string;
  label?: string;
  value: T;
  checked?: boolean;
  disabled?: boolean;
}>();

const emits = defineEmits<{
  (e: "change", value: T): void;
}>();

function handleChange(e: Event) {
  const value = (e.target as HTMLInputElement).value as T;
  emits("change", value);
}
</script>

<template>
  <label :class="[$style['label'], { [$style['label--disabled']]: disabled }]">
    <input
      :class="$style['input']"
      type="radio"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @change="handleChange"
    />
    <div :class="$style['checkmark']"></div>
    <span :class="$style['text']">{{ label }}</span>
  </label>
</template>

<style lang="scss" module>
@use "@/styles/form";

/* Customize the label (the container) */
.label {
  display: inline-flex;
  align-items: center;

  cursor: pointer;
  user-select: none;
}

.label--disabled {
  cursor: not-allowed;
}

/* Hide the browser's default radio button */
.input {
  display: none;
}

/* Create a custom radio button */
.checkmark {
  position: relative;
  height: 16px;
  width: 16px;
  margin-right: 8px;

  border-radius: 50%;
  border-width: form.$border-width;
  border-style: solid;
  border-color: form.$border-color;
}

/* When the radio button is checked, add a purple background */
.input:checked ~ .checkmark {
  background-color: form.$background-color-active;
  border-color: form.$border-color-active;
}

/** When the radio button is disabled, add a grey background */
.input:disabled ~ .checkmark {
  background-color: form.$background-color-disabled;
  border-color: form.$border-color;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 6px;
  height: 6px;

  display: none;
  border-radius: 50%;
  background: form.$background-color;
}

/* Show the indicator (dot/circle) when checked */
.input:checked ~ .checkmark:after {
  display: block;
}

.text {
  font-size: form.$font-size-sm;

  line-height: 24px;
  font-weight: 500;
}
.input:disabled ~ .text {
  color: form.$font-color-disabled;
}
</style>
