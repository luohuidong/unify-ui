<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "UniInput",
});
</script>

<script setup lang="ts">
import { computed, useSlots } from "vue";

import type { ValidateStatus } from "@/types/form";
import { useFormItemStoreInject } from "../Form/composables/useFormItemInject";

const props = withDefaults(
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
    status?: ValidateStatus;
  }>(),
  {
    modelValue: "",
    placeholder: "",
    type: "text",
    status: undefined,
  }
);

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

defineSlots<{
  ["leading-add-on"](props: {}): any;
  ["trailing-add-on"](props: {}): any;
  ["inline-leading-add-on"](props: {}): any;
  ["inline-trailing-add-on"](props: {}): any;
}>();

const slots = useSlots();
const inputRef = ref<HTMLInputElement>();
const formItemStore = useFormItemStoreInject();

const statusValue = computed(() => props.status ?? formItemStore?.formItemInfo.value?.validateStatus);

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
      'input-group--error': !existAddOn && statusValue === 'error',
      'input-group--disabled': !existAddOn && disabled,
    }"
  >
    <span
      v-if="$slots['leading-add-on']"
      class="add-on add-on--leading"
      :class="{ 'add-on--disabled': disabled, 'add-on--error': statusValue === 'error' }"
    >
      <slot name="leading-add-on"></slot>
    </span>

    <span
      v-if="$slots['inline-leading-add-on']"
      :tabindex="disabled ? '' : '1'"
      class="inline-add-on inline-add-on--leading"
      :class="{ 'inline-add-on--error': statusValue === 'error' }"
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
        'input--error': existAddOn && statusValue === 'error',
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
      :class="{ 'inline-add-on--error': statusValue === 'error' }"
      @click.stop="handleInlineAddOnClick"
    >
      <slot name="inline-trailing-add-on"></slot>
    </span>

    <span
      v-if="$slots['trailing-add-on']"
      class="add-on add-on--trailing"
      :class="{ 'add-on--disabled': disabled, 'add-on--error': statusValue === 'error' }"
    >
      <slot name="trailing-add-on"></slot>
    </span>
  </span>
</template>

<style lang="scss" scoped>
@use "@/styles/form";

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

  &.input-group--without-add-on {
    padding: 0 12px;
    border: 1px solid $normal-border-color;

    &:focus-within {
      border: 1px solid $active-border-color;
      outline: 1px solid $active-border-color;
    }
  }

  &.input-group--error {
    border: 1px solid form.$color-error;

    &:focus-within {
      border: 1px solid form.$color-error;
      outline: 1px solid form.$color-error;
    }
  }

  &.input-group--disabled {
    background: $disabled-background-color;
    cursor: not-allowed;
  }
}

.input {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  font-family: inherit;
  font-size: form.$font-size-sm;
  line-height: 24px;
  color: rgb(17 24 39);
  border: none;
  outline: none;
  background-color: transparent;
  z-index: 1;

  &::placeholder {
    color: #a0aec0;
  }

  &:disabled {
    color: #a0aec0;
    cursor: not-allowed;
    background-color: $disabled-background-color;
  }

  &.input--with-add-on {
    border: 1px solid $normal-border-color;
    padding: 0 12px;

    &:focus {
      border: 1px solid $active-border-color;
      outline: 1px solid $active-border-color;
    }
  }

  &.input--left-rounded {
    border-radius: $radius 0 0 $radius;
  }

  &.input--right-rounded {
    border-radius: 0 $radius $radius 0;
  }

  &.input--error {
    border: 1px solid form.$color-error;

    &:focus {
      border: 1px solid form.$color-error;
      outline: 1px solid form.$color-error;
    }
  }
}

.add-on {
  box-sizing: border-box;

  display: flex;
  align-items: center;

  height: 100%;
  padding: 0 12px;

  border-width: 1px;
  border-style: solid;
  border-color: $normal-border-color;
  font-size: form.$font-size-sm;
  color: rgb(107 114 128);

  &.add-on--disabled {
    background: $disabled-background-color;
  }

  &.add-on--leading {
    border-radius: $radius 0 0 $radius;
    border-right: none;
  }

  &.add-on--trailing {
    border-radius: 0 $radius $radius 0;
    border-left: none;
  }

  &.add-on--error {
    color: form.$color-error;
    border-color: form.$color-error;
  }
}

.inline-add-on {
  user-select: none;
  font-size: form.$font-size-sm;
  color: rgb(107 114 128);

  &.inline-add-on--leading {
    margin-right: 4px;
  }

  &.inline-add-on--trailing {
    margin-left: 4px;
  }

  &.inline-add-on--error {
    color: form.$color-error;
  }
}
</style>
