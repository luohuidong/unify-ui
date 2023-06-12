<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniFormItem",
});
</script>

<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted } from "vue";
import type { RuleItem } from "async-validator";

import { useFormStoreInject } from "./composables/useFormStoreInject";

type ValidateStatus = "success" | "error" | undefined;

const props = defineProps<{
  label: string;
  name: string;
  rules: RuleItem[];
}>();

defineSlots<{
  default(props: { validateStatus: ValidateStatus }): any;
}>();

const store = useFormStoreInject();

onMounted(() => {
  store?.registerFormItem(props.name, props.rules);
});
onUnmounted(() => {
  store?.unRegisterFormItem(props.name);
});

const formItemInfo = computed(() => store?.state.formItems.get(props.name));

const formItemValue = computed(() => store?.formProps.model[props.name]);
watch(formItemValue, async (value) => {
  await store?.validateFormItem(props.name);
});
</script>

<template>
  <div>
    <label>
      <div>{{ label }}: {{ formItemValue }}</div>
      <div>
        <slot :validate-status="formItemInfo?.validateStatus"></slot>
      </div>
      <div class="message">{{ formItemInfo?.validateMessage }}</div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.message {
  color: red;
}
</style>
