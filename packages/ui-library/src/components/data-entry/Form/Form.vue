<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniForm",
});
</script>

<script setup lang="ts">
import Schema from "async-validator";
import type { Rules } from "async-validator";
import { cloneDeep } from "lodash-es";

import { useFormStoreProvider } from "./composables";
import type { Model, FormProps } from "./types";

const props = withDefaults(defineProps<FormProps>(), {
  layout: "vertical",
});

const emits = defineEmits<{
  (e: "update:model", value: Model): void;
}>();

defineSlots<{
  default(props: {}): any;
}>();

const { state } = useFormStoreProvider(props);
const originalModel = cloneDeep(props.model);

function clearValidate() {
  state.formItems.forEach((formItem) => {
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

function resetFields() {
  emits("update:model", Object.assign({}, originalModel));
  clearValidate();
}

defineExpose({
  validate, // trigger data entry validation
  clearValidate, // clear data entry validation,
  resetFields, // reset data and clear validation
});
</script>

<template>
  <form
    ref="formRef"
    :class="{
      [$style['form--layout-flex']]: ['horizontal', 'vertical'].includes(layout),
    }"
    @submit.prevent=""
    @reset.prevent=""
  >
    <slot></slot>
  </form>
</template>

<style lang="scss" module>
.form--layout-flex {
  display: flex;
  flex-direction: column;
}
</style>
