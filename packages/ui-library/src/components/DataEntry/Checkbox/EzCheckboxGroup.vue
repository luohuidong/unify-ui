<script setup lang="ts">
import { provide, watch, reactive } from "vue";

import EzCheckbox from "./EzCheckbox.vue";
import type { Value } from "./types";
import { SetUtils } from "./utils";

const props = defineProps<{
  options: { label: string; value: Value }[];
  modelValue: Set<Value>;
  name: string;
  disabled?: boolean;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: Set<Value>): void;
}>();

const state = reactive<{
  values: Set<Value>;
}>({
  values: new Set<Value>(),
});

watch(
  () => [...props.modelValue],
  (modelValue) => {
    const tmp = new Set(modelValue);
    if (modelValue && !SetUtils.equal(tmp, state.values)) {
      state.values = tmp;
    }
  },
  {
    immediate: true,
  }
);

function handleChangeGroupValue(checked: boolean, value: string) {
  checked ? state.values.add(value) : state.values.delete(value);
  emits("update:modelValue", new Set(state.values));
}

provide("handleChangeGroupValue", handleChangeGroupValue);
</script>

<template>
  <fieldset class="fieldset">
    <EzCheckbox
      v-for="item in options"
      :key="item.label"
      :name="name"
      :label="item.label"
      :value="item.value"
      :checked="state.values.has(item.value)"
      :disabled="disabled"
    ></EzCheckbox>
  </fieldset>
</template>

<style lang="scss" scoped>
.fieldset {
  display: flex;
  flex-direction: column;
  width: fit-content;

  border: none;
  padding: 0;
  margin: 0;
}
</style>
