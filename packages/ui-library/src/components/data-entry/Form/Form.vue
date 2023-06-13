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

defineSlots<{
  default(props: {}): any;
}>();

const { state } = useFormStoreProvider(props);

function clearValidate() {
  state.formItems.forEach((formItem, name) => {
    formItem.validateStatus = undefined;
    formItem.validateMessage = "";
  });
}

function validate() {
  const descriptor: Rules = {};
  state.formItems.forEach((formItem, name) => {
    descriptor[name] = formItem.rules;
  });
  const validator = new Schema(descriptor);

  return new Promise((resolve, reject) => {
    validator.validate(props.model, (errors) => {
      if (errors) {
        errors.forEach((error) => {
          const formItem = state.formItems.get(error.field as string);
          if (formItem) {
            formItem.validateStatus = "error";
            formItem.validateMessage = error.message as string;
          }
        });
        reject("validate failed");
      } else {
        state.formItems.forEach((formItem, name) => {
          formItem.validateStatus = "success";
          formItem.validateMessage = "";
        });
        resolve("pass");
      }
    });
  });
}

defineExpose({
  validate, // trigger data entry validation
  clearValidate, // clear data entry validation
});
</script>

<template>
  <form ref="formRef" :class="$style.form" @submit.prevent="" @reset.prevent="">
    <slot></slot>
  </form>
</template>

<style lang="scss" module>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
