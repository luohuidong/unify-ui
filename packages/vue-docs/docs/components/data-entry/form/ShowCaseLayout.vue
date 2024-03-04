<script setup lang="ts">
import { UniForm, UniFormItem, UniInput, UniButton, UniPassword, UniRadioGroup } from "unify-ui";
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

const options = ["horizontal", "vertical", "inline"].map((item) => ({ label: item, value: item }));
const layout = ref<InstanceType<typeof UniForm>["$props"]["layout"]>("horizontal");
</script>

<template>
  <div class="container">
    <UniRadioGroup
      v-model="layout"
      :options="options"
      name="layout-options"
      inline
      :style="{ marginBottom: '20px' }"
    ></UniRadioGroup>

    <UniForm ref="formRef" v-model:model="model" :layout="layout" label-width="90px">
      <UniFormItem
        name="username"
        :rules="[{ required: true, message: 'Username is required' }]"
        label="Username"
      >
        <UniInput v-model="model.username" class="input" />
      </UniFormItem>

      <UniFormItem
        name="password"
        :rules="[{ required: true, message: 'Password is required' }]"
        label="Password"
      >
        <UniPassword v-model="model.password" class="input" />
      </UniFormItem>

      <UniFormItem name="address" label="Address">
        <UniInput v-model="model.address" class="input" />
      </UniFormItem>

      <UniFormItem>
        <UniButton class="button" type="soft" @click="handleSubmit">Submit</UniButton>
        <UniButton class="button" @click="handleReset">Reset</UniButton>
      </UniFormItem>
    </UniForm>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

.button {
  width: 100px;
  margin-right: 20px;
}

.input {
  width: 150px;
}
</style>
