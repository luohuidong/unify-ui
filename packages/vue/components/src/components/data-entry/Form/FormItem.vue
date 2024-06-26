<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniFormItem",
});
</script>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from "vue";
import type { RuleItem } from "async-validator";

import type { ValidateStatus } from "@/types/form";
import { useFormStoreInject, useProvideFormItemValidateStatus } from "./composables";

const props = withDefaults(
  defineProps<{
    label?: string;
    name?: string;
    rules?: RuleItem[];
  }>(),
  {
    label: undefined,
    name: undefined,
    rules: () => [],
  }
);

defineSlots<{
  default(props: { validateStatus: ValidateStatus }): any;
}>();

const store = useFormStoreInject();

onMounted(() => {
  if (props.name) {
    store?.registerFormItem(props.name, props.rules);
  }
});
onUnmounted(() => {
  if (props.name) {
    store?.unRegisterFormItem(props.name);
  }
});

const formItemInfo = computed(() =>
  props.name ? store?.state.formItems.get(props.name) : undefined
);
useProvideFormItemValidateStatus(formItemInfo);

const isRequired = computed(() => props.rules.find((rule) => (rule as any).required));
const layout = computed(() => store?.formProps.layout);
const labelWidth = computed(() => store?.formProps.labelWidth);
const isHorizontal = computed(() => layout.value === "horizontal" || layout.value === "inline");
</script>

<template>
  <label
    :class="[
      $style['form-item'],
      {
        [$style['form-item--vertical']]: layout === 'vertical',
        [$style['form-item--horizontal']]: isHorizontal,
      },
    ]"
  >
    <div
      :class="{
        [$style['form-item__label']]: true,
        [$style['form-item__label--horizontal']]: isHorizontal,
      }"
    >
      <span v-if="isRequired" :class="$style['form-item__asterisk']">*</span>{{ label }}
    </div>

    <div :class="$style['form-item__slot']">
      <slot :validate-status="formItemInfo?.validateStatus"></slot>

      <div :class="$style['form-item__message']">{{ formItemInfo?.validateMessage }}</div>
    </div>
  </label>
</template>

<style lang="scss" module>
.form-item {
  display: inline-flex;
  margin-bottom: 24px;
}

.form-item--vertical {
  flex-direction: column;
  justify-content: center;
}

.form-item--horizontal {
  flex-direction: row;
  align-items: center;
}

.form-item__label {
  display: flex;
  align-items: center;
  color: rgb(17, 24, 39);
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
}

.form-item__label--horizontal {
  justify-content: flex-end;
  width: v-bind(labelWidth);
  text-align: right;
  padding-right: 10px;
}

.form-item__asterisk {
  margin-right: 4px;
  color: rgb(220, 38, 38);
}

.form-item__slot {
  position: relative;
}

.form-item__message {
  position: absolute;
  bottom: 0;
  transform: translateY(24px);
  color: rgb(220, 38, 38);
  font-size: 14px;
  line-height: 24px;
  height: 24px;
}
</style>
