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
  <label class="label" :class="{ 'label--disabled': disabled }">
    <input
      class="input"
      type="radio"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @change="handleChange"
    />
    <div class="checkmark"></div>
    <span class="text">{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
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
  border-width: 1px;
  border-style: solid;
  border-color: rgb(209, 213, 219);
}

/* When the radio button is checked, add a purple background */
.input:checked ~ .checkmark {
  --checked-color: #4f46e5;
  background-color: var(--checked-color);
  border-color: var(--checked-color);
}

/** When the radio button is disabled, add a grey background */
.input:disabled ~ .checkmark {
  --disabled-color: #eee;
  background-color: var(--disabled-color);
  border-color: var(--disabled-color);
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
  background: white;
}

/* Show the indicator (dot/circle) when checked */
.input:checked ~ .checkmark:after {
  display: block;
}

.text {
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
}
.input:disabled ~ .text {
  color: #ccc;
}
</style>
