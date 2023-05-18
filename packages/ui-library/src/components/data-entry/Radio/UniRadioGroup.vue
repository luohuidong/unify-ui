<script setup lang="ts">
import UniRadio from "./UniRadio.vue";

defineProps<{
  options: { label: string; value: string | number }[];
  name: string;
  inline?: boolean;
}>();
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
