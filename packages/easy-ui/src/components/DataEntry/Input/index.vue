<script lang="ts">
import { defineComponent, useSlots } from "vue";

export default defineComponent({
  name: "EzInput",
});
</script>

<script setup lang="ts">
defineProps<{
  modelValue?: string;
  disabled?: boolean;
  placeholder?: string;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function handleInput(e: Event) {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>

<template>
  <span class="input-wrapper" :class="{ 'input-wrapper--disabled': disabled }">
    <span v-if="$slots['inline-leading-add-on']" class="input-add-on input-add-on--leading">
      <slot name="inline-leading-add-on"></slot>
    </span>

    <input
      :value="modelValue"
      class="input"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
    />

    <slot name="trailing-add-on"></slot>
  </span>
</template>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  box-sizing: border-box;
  height: 36px;
  margin: 2px;
  padding: 0px 12px;

  display: inline-flex;
  align-items: center;

  border-radius: 6px;
  border: 1px solid #d1d5db;
  background-color: #fff;
  overflow: hidden;
  color: rgb(17 24 39);
}

.input-wrapper:focus-within {
  border: 1px solid rgb(79 70 229);
  outline: 1px solid rgb(79 70 229);
}

.input-wrapper--disabled {
  background: rgb(249 250 251);
  cursor: not-allowed;

  * {
    cursor: not-allowed;
  }
}

.input {
  height: 100%;
  font-family: inherit;
  font-size: 14px;
  line-height: 24px;
  color: rgb(17 24 39);
  border: none;
  outline: none;
  background-color: transparent;
}

.input::placeholder {
  color: #a0aec0;
}

.input:disabled {
  color: #a0aec0;
}

.input-add-on {
  user-select: none;
  font-size: 14px;
  color: rgb(107 114 128);
}

.input-add-on--leading {
  margin-right: 4px;
}
</style>
