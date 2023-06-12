<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniForm",
});
</script>

<script setup lang="ts">
import Schema from "async-validator";
import type { Rules } from "async-validator";

import { useFormStoreProvider } from "./composables";
import type { Model } from "./types";

const props = withDefaults(
  defineProps<{
    model: Model;
    layout?: "horizontal" | "vertical" | "inline";
  }>(),
  {
    layout: "horizontal",
  }
);

const { state } = useFormStoreProvider(props);

const emits = defineEmits<{
  (e: "finish"): void;
  (e: "finish-failed"): void;
}>();

function validate() {
  const descriptor: Rules = {};
  state.formItems.forEach((formItem, name) => {
    descriptor[name] = formItem.rules;
  });
  const validator = new Schema(descriptor);

  return validator
    .validate(props.model)
    .then(() => {
      state.formItems.forEach((formItem, name) => {
        formItem.validateStatus = "success";
        formItem.validateMessage = "";
      });
      emits("finish");
    })
    .catch(({ errors }) => {
      errors.forEach((error) => {
        const formItem = state.formItems.get(error.field as string);
        if (formItem) {
          formItem.validateStatus = "error";
          formItem.validateMessage = error.message as string;
        }
      });
      emits("finish-failed");
      throw new Error("validate failed");
    });
}

async function handleSubmit() {
  try {
    await validate();
  } catch {}
}

defineExpose({
  validate,
});
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <slot></slot>
  </form>
</template>

<style lang="scss" module></style>
