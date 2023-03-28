<script setup lang="ts">
import { provide, ref, watch, watchEffect, reactive } from "vue";

import EzCheckbox from "./EzCheckbox.vue";
import type { Value } from "./types";
import { SetUtils } from "./utils";

const props = defineProps<{
  options: { label: string; value: Value }[];
  modelValue: Set<Value>;
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
  <EzCheckbox
    v-for="item in options"
    :key="item.label"
    :label="item.label"
    :value="item.value"
    :checked="state.values.has(item.value)"
  ></EzCheckbox>
</template>

<style lang="scss" module></style>
