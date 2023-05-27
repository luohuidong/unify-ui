<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniPassword",
});
</script>

<script setup lang="ts">
import { ref } from "vue";

import UniInput from "../Input/index.vue";
import EyeOn from "./icons/EyeOn.vue";
import EyeOff from "./icons/EyeOff.vue";

withDefaults(
  defineProps<{
    modelValue?: string;
  }>(),
  {
    modelValue: "",
  }
);

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const showPassword = ref(false);

function handleTriggerClick() {
  showPassword.value = !showPassword.value;
}
</script>

<template>
  <UniInput
    :model-value="modelValue"
    :type="showPassword ? 'text' : 'password'"
    @update:model-value="(value) => $emit('update:modelValue', value)"
  >
    <template #inline-trailing-add-on>
      <div class="password-trigger-container">
        <EyeOn v-if="showPassword" class="password-trigger" @click="handleTriggerClick" />
        <EyeOff v-else class="password-trigger" @click="handleTriggerClick" />
      </div>
    </template>
  </UniInput>
</template>

<style lang="scss" scoped>
.password-trigger-container {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 100%;
}

.password-trigger {
  width: 16px;
  height: 16px;
}
</style>
