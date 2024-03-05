<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "UniInput",
});
</script>

<script setup lang="ts">
import { computed, useSlots } from "vue";

import type { ValidateStatus } from "@/types/form";
import { useGetFormItemValidateStatus } from "@/index";

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
const validateStatus = useGetFormItemValidateStatus();

const statusValue = computed(() => props.status ?? validateStatus?.value);

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
    :class="[
      $style['input-group'],
      {
        [$style['input-group--without-add-on']]: !existAddOn,
        [$style['input-group--error']]: !existAddOn && statusValue === 'error',
        [$style['input-group--disabled']]: !existAddOn && disabled,
      },
    ]"
  >
    <span
      v-if="$slots['leading-add-on']"
      :class="[
        $style['add-on'],
        $style['add-on--leading'],
        { [$style['add-on--disabled']]: disabled, [$style['add-on--error']]: statusValue === 'error' },
      ]"
    >
      <slot name="leading-add-on"></slot>
    </span>

    <span
      v-if="$slots['inline-leading-add-on']"
      :tabindex="disabled ? '' : '1'"
      :class="[
        $style['inline-add-on'],
        $style['inline-add-on--leading'],
        { [$style['inline-add-on--error']]: statusValue === 'error' },
      ]"
      @click.stop="handleInlineAddOnClick"
    >
      <slot name="inline-leading-add-on"></slot>
    </span>

    <input
      ref="inputRef"
      :value="modelValue"
      :class="[
        $style.input,
        {
          [$style['input--with-add-on']]: existAddOn,
          [$style['input--left-rounded']]: $slots['trailing-add-on'] && !$slots['leading-add-on'],
          [$style['input--right-rounded']]: $slots['leading-add-on'] && !$slots['trailing-add-on'],
          [$style['input--error']]: existAddOn && statusValue === 'error',
        },
      ]"
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
      :class="[
        $style['inline-add-on'],
        $style['inline-add-on--trailing'],
        { [$style['inline-add-on--error']]: statusValue === 'error' },
      ]"
      @click.stop="handleInlineAddOnClick"
    >
      <slot name="inline-trailing-add-on"></slot>
    </span>

    <span
      v-if="$slots['trailing-add-on']"
      :class="[
        $style['add-on'],
        $style['add-on--trailing'],
        { [$style['add-on--disabled']]: disabled, [$style['add-on--error']]: statusValue === 'error' },
      ]"
    >
      <slot name="trailing-add-on"></slot>
    </span>
  </span>
</template>

<style lang="scss" module>
@use "@/styles/form";

.input-group {
  box-sizing: border-box;

  height: form.$control-height;
  width: form.$control-default-width;

  display: inline-flex;
  align-items: center;

  border-radius: form.$radius;
  background-color: form.$background-color;

  &.input-group--without-add-on {
    padding: 0 form.$control-padding-x;
    border: 1px solid form.$border-color;

    &:focus-within {
      border: 1px solid form.$border-color-active;
      outline: 1px solid form.$outline-color-active;
    }
  }

  &.input-group--error {
    border: 1px solid form.$border-color-error;

    &:focus-within {
      border: 1px solid form.$border-color-error;
      outline: 1px solid form.$outline-color-error;
    }
  }

  &.input-group--disabled {
    background: form.$background-color-disabled;
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
  color: form.$font-color;
  border: none;
  outline: none;
  background-color: transparent;
  z-index: 1;

  &::placeholder {
    color: form.$placeholder-color;
  }

  &:disabled {
    color: form.$font-color-disabled;
    cursor: not-allowed;
    background-color: form.$background-color-disabled;
  }

  &.input--with-add-on {
    border: 1px solid form.$border-color;
    padding: 0 form.$control-padding-x;

    &:focus {
      border: 1px solid form.$border-color-active;
      outline: 1px solid form.$outline-color-active;
    }
  }

  &.input--left-rounded {
    border-radius: form.$radius 0 0 form.$radius;
  }

  &.input--right-rounded {
    border-radius: 0 form.$radius form.$radius 0;
  }

  &.input--error {
    border: 1px solid form.$border-color-error;

    &:focus {
      border: 1px solid form.$border-color-error;
      outline: 1px solid form.$outline-color-error;
    }
  }
}

.add-on {
  box-sizing: border-box;

  display: flex;
  align-items: center;

  height: 100%;
  padding: 0 form.$control-padding-x;

  border-width: 1px;
  border-style: solid;
  border-color: form.$border-color;
  font-size: form.$font-size-sm;
  color: rgb(107 114 128);

  &.add-on--disabled {
    background: form.$background-color-disabled;
  }

  &.add-on--leading {
    border-radius: form.$radius 0 0 form.$radius;
    border-right: none;
  }

  &.add-on--trailing {
    border-radius: 0 form.$radius form.$radius 0;
    border-left: none;
  }

  &.add-on--error {
    color: form.$font-color-error;
    border-color: form.$border-color-error;
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
    color: form.$font-color-error;
  }
}
</style>
