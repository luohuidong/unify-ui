<script setup lang="ts" generic="T extends string | number | symbol">
import UniRadio from "./UniRadio.vue";

defineProps<{
  modelValue?: T;
  options: { label: string; value: T }[];
  name: string;
  inline?: boolean;
  disabled?: boolean;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: T): void;
  (e: "change", value: T): void;
}>();

function handleChange(value: T) {
  emits("update:modelValue", value);
  /** Triggered after a value is selected */
  emits("change", value);
}
</script>

<template>
  <fieldset
    class="radio-fieldset"
    :class="{ 'radio-fieldset--column': !inline, 'radio-fieldset--row': inline }"
  >
    <UniRadio
      v-for="option in options"
      :key="option.value"
      :name="name"
      :label="option.label"
      :value="option.value"
      :checked="modelValue === option.value"
      :disabled="disabled"
      @change="handleChange"
    ></UniRadio>
  </fieldset>
</template>

<style lang="scss" scoped>
.radio-fieldset {
  display: flex;
  width: fit-content;

  border: none;
  padding: 0;
  margin: 0;
}

.radio-fieldset--column {
  flex-direction: column;
  gap: 8px;
}

.radio-fieldset--row {
  flex-direction: row;
  gap: 30px;
}
</style>
