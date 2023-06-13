<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniFormItem",
});
</script>

<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted, provide } from "vue";
import type { RuleItem } from "async-validator";

import { useFormStoreInject } from "./composables/useFormStoreInject";
import { InjectFormItemStoreInjectKey } from "./composables/injectKeys";
import type { ValidateStatus } from "./types";

const props = withDefaults(
  defineProps<{
    label: string;
    name: string;
    rules?: RuleItem[];
  }>(),
  {
    rules: () => [],
  }
);

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

provide(InjectFormItemStoreInjectKey, {
  formItemInfo,
});

const isRequired = computed(() => props.rules.find((rule) => (rule as any).required));
</script>

<template>
  <label :class="$style.container">
    <div :class="$style.label">
      <span v-if="isRequired" :class="$style.label__asterisk">*</span>{{ label }}
    </div>
    <div :class="$style.slot">
      <slot :validate-status="formItemInfo?.validateStatus"></slot>
    </div>
    <div :class="$style.message">{{ formItemInfo?.validateMessage }}</div>
  </label>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.label {
  display: inline-block;
  color: rgb(17, 24, 39);
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;

  .label__asterisk {
    margin-right: 4px;
    color: rgb(220, 38, 38);
  }
}

.slot {
  display: inline-block;
}

.message {
  display: inline-block;
  color: rgb(220, 38, 38);
  font-size: 14px;
  line-height: 24px;
  height: 24px;
}
</style>
