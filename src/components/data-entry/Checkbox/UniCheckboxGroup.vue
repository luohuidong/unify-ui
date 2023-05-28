<script setup lang="ts">
import { provide, watch, reactive, computed } from "vue";

import UniCheckbox from "./UniCheckbox.vue";
import type { Value } from "./types";
import { SetUtils } from "./utils";

const props = defineProps<{
  options: { label: string; value: Value }[];
  modelValue: Set<Value>;
  name: string;
  disabled?: boolean;
  inline?: boolean;
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

const flexDirection = computed(() => (props.inline ? "row" : "column"));
</script>

<template>
  <fieldset class="checkbox-fieldset">
    <UniCheckbox
      v-for="item in options"
      :key="item.label"
      :class="{ 'checkbox--column': !inline }"
      :name="name"
      :label="item.label"
      :value="item.value"
      :checked="state.values.has(item.value)"
      :disabled="disabled"
    ></UniCheckbox>
  </fieldset>
</template>

<style lang="scss" scoped>
.checkbox-fieldset {
  display: flex;
  flex-direction: v-bind(flexDirection);
  width: fit-content;

  border: none;
  padding: 0;
  margin: 0;
}

.checkbox--column:not(:first-child) {
  margin-top: 16px;
}
</style>
