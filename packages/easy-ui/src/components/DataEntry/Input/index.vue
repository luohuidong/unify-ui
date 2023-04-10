<script lang="ts">
import { defineComponent } from "vue";

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
  <input
    :value="modelValue"
    class="input"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="handleInput"
  />
</template>

<style lang="scss" scoped>
.input {
  padding: 6px 12px;
  margin: 2px;

  border-radius: 6px;
  border: 1px solid #d1d5db;

  color: rgb(17 24 39);

  outline: none;
  background-color: #fff;
}

.input::placeholder {
  color: #a0aec0;
  cursor: pointer;
}

.input:focus {
  border: 1px solid rgb(79 70 229);
  outline: 1px solid rgb(79 70 229);
}

.input:disabled {
  background: rgb(249 250 251);
  cursor: not-allowed;
  color: #a0aec0;
}
</style>
