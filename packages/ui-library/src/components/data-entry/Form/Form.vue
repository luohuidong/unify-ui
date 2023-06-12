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
        emits("finish-failed");
        reject("validate failed");
      } else {
        state.formItems.forEach((formItem, name) => {
          formItem.validateStatus = "success";
          formItem.validateMessage = "";
        });
        emits("finish");
        resolve("pass");
      }
    });
  });
}

async function handleSubmit() {
  await validate().catch(() => {});
}

defineExpose({
  validate,
});
</script>

<template>
  <form :class="$style.form" @submit.prevent="handleSubmit">
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
