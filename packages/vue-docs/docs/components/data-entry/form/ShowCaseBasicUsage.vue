<script setup lang="ts">
import { UniForm, UniFormItem, UniInput, UniButton, UniPassword, UniSelect, UniSelectOption } from "unify-ui";
import { ref } from "vue";

const model = ref({
  username: "",
  password: "",
  address: "",
  gender: "",
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
    <UniFormItem name="username" label="Username" :rules="[{ required: true, message: 'Username is required' }]">
      <UniInput v-model="model.username" />
    </UniFormItem>

    <UniFormItem name="password" label="Password" :rules="[{ required: true, message: 'Password is required' }]">
      <UniPassword v-model="model.password" />
    </UniFormItem>

    <UniFormItem name="address" label="Address" :rules="[{ required: true, message: 'Address is requried' }]">
      <UniInput v-model="model.address" />
    </UniFormItem>

    <UniFormItem name="gender" label="Geneder" :rules="[{ required: true, message: 'Gender is requried' }]">
      <UniSelect v-model="model.gender">
        <UniSelectOption label="male" value="male" />
        <UniSelectOption label="female" value="Female" />
      </UniSelect>
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
