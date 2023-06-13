<script setup lang="ts">
import { UniForm, UniFormItem, UniInput, UniButton, UniPassword } from "@/components";
import { reactive, ref } from "vue";

const model = reactive({
  username: "",
  password: "",
});

const formRef = ref<InstanceType<typeof UniForm> | null>(null);

async function handleSubmit({ clearValidate }: { clearValidate: () => void }) {
  try {
    await formRef.value?.validate();
    console.log("validate pass, model:", model);
  } catch (error) {
    console.error("validate error");
  }
}

function handleReset() {
  model.username = "";
  model.password = "";
  formRef.value?.clearValidate();
}
</script>

<template>
  <div class="container">
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

      <div>
        <UniButton class="button" type="soft" @click="handleSubmit">Submit</UniButton>
        <UniButton class="button" @click="handleReset">Reset</UniButton>
      </div>
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
</style>
