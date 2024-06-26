<script setup lang="ts">
import { UniForm, UniFormItem, UniButton } from "unify-ui";
import { ref } from "vue";

import CustomizedInput from "./ShowCaseCustomizedFormControl2Input.vue";

const model = ref({
  username: "",
});

const formRef = ref<InstanceType<typeof UniForm> | null>(null);

async function handleSubmit() {
  try {
    await formRef.value?.validate();
    console.log("validate pass, model:", model);
  } catch (error) {
    console.error("validate error");
  }
}

function handleReset() {
  formRef.value?.resetFields();
}
</script>

<template>
  <UniForm ref="formRef" v-model:model="model">
    <UniFormItem name="username" :rules="[{ required: true, message: 'Username is required' }]" label="Username">
      <CustomizedInput v-model="model.username" />
    </UniFormItem>

    <div>
      <UniButton class="button" type="soft" @click="handleSubmit">Submit</UniButton>
      <UniButton class="button" @click="handleReset">Reset</UniButton>
    </div>
  </UniForm>
</template>

<style scoped>
.button {
  width: 100px;
  margin-right: 20px;
}
</style>
