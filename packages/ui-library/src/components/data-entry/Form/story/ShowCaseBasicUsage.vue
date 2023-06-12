<script setup lang="ts">
import { UniForm, UniFormItem, UniInput } from "@/components";
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
  <UniForm :model="model" @finish="handleFinish" @finish-failed="handleFinishFailed">
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

    <button>提交</button>
  </UniForm>
</template>
