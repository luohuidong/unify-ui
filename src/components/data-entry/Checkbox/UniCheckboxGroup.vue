<script setup lang="ts">
import { provide, watch, reactive, computed } from "vue";

import UniCheckbox from "./UniCheckbox.vue";
import { SetUtils } from "./utils";

type V = string | number;

const props = defineProps<{
  options: { label: string; value: V }[];
  modelValue: Set<V>;
  disabled?: boolean;
  inline?: boolean;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: Set<V>): void;
  (e: "change", value: Set<V>): void;
}>();

const state = reactive<{
  values: Set<V>;
}>({
  values: new Set(),
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

function handleChangeGroupValue(checked: boolean, value: V) {
  checked ? state.values.add(value) : state.values.delete(value);

  const newValue = new Set(state.values);
  emits("update:modelValue", newValue);
  emits("change", newValue);
}

provide("handleChangeGroupValue", handleChangeGroupValue);

const flexDirection = computed(() => (props.inline ? "row" : "column"));
</script>

<template>
  <fieldset :class="$style['checkbox-fieldset']">
    <UniCheckbox
      v-for="item in options"
      :key="item.label"
      :label="item.label"
      :value="item.value"
      :checked="state.values.has(item.value)"
      :disabled="disabled"
    ></UniCheckbox>
  </fieldset>
</template>

<style lang="scss" module>
.checkbox-fieldset {
  display: flex;
  flex-direction: v-bind(flexDirection);
  width: fit-content;
  gap: 5px;

  border: none;
  padding: 0;
  margin: 0;
}
</style>
