<script setup lang="ts">
import { reactive } from "vue";
import { UniForm, UniFormItem, UniInput } from "@/components";

const model = reactive({
  username: "",
});
</script>

<template>
  <Story title="Data Entry/Form">
    <UniForm :model="model">
      <UniFormItem
        name="username"
        :rules="[{ required: true, message: 'Username is required' }]"
        label="Username"
      >
        <uni-input v-model="model.username" />
      </UniFormItem>
    </UniForm>
  </Story>
</template>
