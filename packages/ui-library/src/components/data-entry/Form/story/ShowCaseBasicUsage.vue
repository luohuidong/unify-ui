<script setup lang="ts">
import { UniForm, UniFormItem, UniInput, UniButton, UniPassword } from "@/components";
import { reactive } from "vue";

const model = reactive({
  username: "",
  password: "",
});

function handleFinish() {
  console.log("model", model);
}

function handleFinishFailed() {
  console.error("finish failed");
}
</script>

<template>
  <UniForm
    :model="model"
    class="container"
    @finish="handleFinish"
    @finish-failed="handleFinishFailed"
  >
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

    <UniButton class="button" type="soft">Submit</UniButton>
  </UniForm>
</template>

<style scoped>
.container {
  padding: 20px;
}

.button {
  width: 100px;
}
</style>
