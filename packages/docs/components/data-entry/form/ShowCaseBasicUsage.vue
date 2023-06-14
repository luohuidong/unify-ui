<script setup lang="ts">
import { UniForm, UniFormItem, UniInput, UniButton, UniPassword } from "unify-ui";
import { ref } from "vue";

const model = ref({
  username: "",
  password: "",
  address: "",
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
  <div>
    <UniForm ref="formRef" v-model:model="model">
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
        <UniPassword v-model="model.password" />
      </UniFormItem>

      <UniFormItem name="address" label="Address">
        <UniInput v-model="model.address" />
      </UniFormItem>

      <div>
        <UniButton class="button" type="soft" @click="handleSubmit">Submit</UniButton>
        <UniButton class="button" @click="handleReset">Reset</UniButton>
      </div>
    </UniForm>
  </div>
</template>

<style scoped>
.button {
  width: 100px;
  margin-right: 20px;
}
</style>
