<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "UniInput",
});
</script>

<script setup lang="ts">
import { computed, useSlots } from "vue";

defineProps<{
  /** Input value */
  modelValue?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Input placeholder */
  placeholder?: string;
  /** Control input editability */
  readonly?: boolean;
  /** native input types */
  type?: string;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
  /** The 'input' event is triggered when the value of an Input components changes. */
  (e: "input", value: string): void;
  /**
   * The 'change' event fires when the value is committed, for example, by pressing the
   * enter key or when the input element loses focus after its value has been changed
   */
  (e: "change", value: string): void;
}>();

const slots = useSlots();
const inputRef = ref<HTMLInputElement>();

function handleInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emits("update:modelValue", value);
  emits("input", value);
}

function handleChange(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emits("change", value);
}

function handleInlineAddOnClick() {
  inputRef.value?.focus();
}

const existAddOn = computed(() => {
  return slots["leading-add-on"] || slots["trailing-add-on"];
});
</script>

<template>
  <span
    class="input-group"
    :class="{
      'input-group--without-add-on': !existAddOn,
      'input-group--disabled': !existAddOn && disabled,
    }"
  >
    <span
      v-if="$slots['leading-add-on']"
      class="add-on add-on--leading"
      :class="{ 'add-on--disabled': disabled }"
    >
      <slot name="leading-add-on"></slot>
    </span>

    <span
      v-if="$slots['inline-leading-add-on']"
      :tabindex="disabled ? '' : '1'"
      class="inline-add-on inline-add-on--leading"
      @click.stop="handleInlineAddOnClick"
    >
      <slot name="inline-leading-add-on"></slot>
    </span>

    <input
      ref="inputRef"
      :value="modelValue"
      class="input"
      :class="{
        'input--with-add-on': existAddOn,
        'input--left-rounded': $slots['trailing-add-on'] && !$slots['leading-add-on'],
        'input--right-rounded': $slots['leading-add-on'] && !$slots['trailing-add-on'],
      }"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :type="type"
      @input="handleInput"
      @change="handleChange"
    />

    <span
      v-if="$slots['inline-trailing-add-on']"
      :tabindex="disabled ? '' : '1'"
      class="inline-add-on inline-add-on--trailing"
      @click.stop="handleInlineAddOnClick"
    >
      <slot name="inline-trailing-add-on"></slot>
    </span>

    <span
      v-if="$slots['trailing-add-on']"
      class="add-on add-on--trailing"
      :class="{ 'add-on--disabled': disabled }"
    >
      <slot name="trailing-add-on"></slot>
    </span>
  </span>
</template>

<style lang="scss" scoped>
$normal-border-color: #d1d5db;
$active-border-color: #4f46e5;
$radius: 6px;
$disabled-background-color: rgb(249 250 251);

.input-group {
  box-sizing: border-box;

  height: 36px;
  min-width: 250px;

  display: inline-flex;
  align-items: center;

  border-radius: $radius;
  background-color: #fff;
  color: rgb(17 24 39);
}

.input-group--without-add-on {
  padding: 0px 12px;
  border: 1px solid $normal-border-color;
}

.input-group--without-add-on:focus-within {
  border: 1px solid $active-border-color;
  outline: 1px solid $active-border-color;
}

.input-group--disabled {
  background: $disabled-background-color;
  cursor: not-allowed;
}

.input {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  line-height: 24px;
  color: rgb(17 24 39);
  border: none;
  outline: none;
  background-color: transparent;
}

.input--with-add-on {
  border: 1px solid $normal-border-color;
  padding: 0 12px;
}
.input--with-add-on:focus-within {
  border: 1px solid $active-border-color;
  outline: 1px solid $active-border-color;
}

.input--left-rounded {
  border-radius: $radius 0 0 $radius;
}

.input--right-rounded {
  border-radius: 0 $radius $radius 0;
}

.input::placeholder {
  color: #a0aec0;
}

.input:disabled {
  color: #a0aec0;
  cursor: not-allowed;
  background-color: $disabled-background-color;
}

.input:focus {
  z-index: 1;
}

.add-on {
  box-sizing: border-box;

  display: flex;
  align-items: center;

  height: 100%;
  padding: 0 12px;

  border: 1px solid $normal-border-color;
  font-size: 14px;
  color: rgb(107 114 128);
}

.add-on--disabled {
  background: $disabled-background-color;
}

.add-on--leading {
  border-radius: $radius 0 0 $radius;
  border-right: none;
}

.add-on--trailing {
  border-radius: 0 $radius $radius 0;
  border-left: none;
}

.inline-add-on {
  user-select: none;
  font-size: 14px;
  color: rgb(107 114 128);
}

.inline-add-on--leading {
  margin-right: 4px;
}

.inline-add-on--trailing {
  margin-left: 4px;
}
</style>
