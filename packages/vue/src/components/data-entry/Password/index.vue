<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniPassword",
});
</script>

<script setup lang="ts">
import { ref } from "vue";

import type { ValidateStatus } from "@/types/form";
import { useGetFormItemValidateStatus } from "@/index";
import UniInput from "../Input/index.vue";
import EyeOn from "./icons/EyeOn.vue";
import EyeOff from "./icons/EyeOff.vue";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    disabled?: boolean;
    placeholder?: string;
    status?: ValidateStatus;
  }>(),
  {
    modelValue: "",
    placeholder: "",
    status: undefined,
  }
);

defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "input", value: string): void;
  (e: "change", value: string): void;
}>();

const showPassword = ref(false);
const validateStatus = useGetFormItemValidateStatus();

function handleTriggerClick() {
  if (props.disabled) return;
  showPassword.value = !showPassword.value;
}
</script>

<template>
  <UniInput
    :model-value="modelValue"
    :type="showPassword ? 'text' : 'password'"
    :disabled="disabled"
    :placeholder="placeholder"
    :status="status ?? validateStatus"
    @update:model-value="(value: string) => $emit('update:modelValue', value)"
    @input="(value: string) => $emit('input', value)"
    @change="(value: string) => $emit('change', value)"
  >
    <template #inline-trailing-add-on>
      <div v-if="!props.disabled" :class="$style['password-trigger-container']">
        <EyeOn
          v-if="showPassword"
          :class="$style['password-trigger']"
          @click="handleTriggerClick"
        />
        <EyeOff v-else :class="$style['password-trigger']" @click="handleTriggerClick" />
      </div>
    </template>
  </UniInput>
</template>

<style lang="scss" module>
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
