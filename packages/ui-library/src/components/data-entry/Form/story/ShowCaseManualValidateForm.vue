<script setup lang="ts">
import { UniForm, UniFormItem, UniInput } from "@/components";
import { reactive, ref } from "vue";

const model = reactive({
  username: "",
  password: "",
});

const formRef = ref<InstanceType<typeof UniForm> | null>(null);

async function handleSubmit() {
  try {
    await formRef.value?.validate();
    console.log("validate pass");
  } catch (error) {
    console.error("validate error");
  }
}
</script>

<template>
  <UniForm ref="formRef" :model="model">
    <UniFormItem
      name="username"
      :rules="[{ required: true, message: 'Username is required' }]"
      label="Username"
    >
      <UniInput v-model="model.username" />
    </UniFormItem>

    <UniFormItem
      name="password"
      :rules="[{ required: true, message: 'Password is required' }]"
      label="Password"
    >
      <UniInput v-model="model.password" />
    </UniFormItem>

    <button @click.prevent="handleSubmit">提交</button>
  </UniForm>
</template>
