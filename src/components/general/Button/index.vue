<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniButton",
});
</script>

<script setup lang="ts">
import "@unify-ui/web-components/lib/button";

withDefaults(
  defineProps<{
    type?: "secondary" | "primary" | "soft";
    size?: "xs" | "s" | "m" | "l" | "xl";
    rounded?: boolean;
    disabled?: boolean;
    htmlType?: "button" | "submit" | "reset";
  }>(),
  {
    type: "soft",
    size: "m",
    htmlType: "button",
  }
);

const emits = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const slots = defineSlots<{
  default(props: {}): any;
}>();
</script>

<template>
  <u-button
    :type="type"
    :html-type="htmlType"
    :size="size"
    :disabled="disabled"
    :rounded="rounded"
    @click="(e: MouseEvent) => $emit('click', e)"
  >
    <slot></slot>
  </u-button>
</template>

<style lang="scss" module>
.button {
  font-weight: 600;

  border: none;
  outline: none;

  background: none;
  cursor: pointer;
}

.button--size-xs {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
}

.button--size-s {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
}

.button--size-m {
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 20px;
}

.button--size-l {
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 20px;
}

.button--size-xl {
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 20px;
}

.button--type-primary {
  color: white;
  background-color: rgb(79 70 229);
  border: 1px solid rgb(79 70 229);

  &:hover,
  &:active {
    background-color: rgb(99 102 241);
    border-color: rgb(99 102 241);
  }
}

.button--type-secondary {
  color: rgb(17 24 39);
  background-color: white;
  border: 1px solid #e5e7eb;

  &:hover,
  &:active {
    background-color: rgb(249 250 251);
    border-color: #e5e7eb;
  }
}

.button--type-soft {
  color: rgb(79 70 229);
  background-color: rgb(238 242 255);
  border: 1px solid rgb(238 242 255);

  &:hover,
  &:active {
    background-color: rgb(224 231 255);
    border-color: rgb(224 231 255);
  }
}

.button--rounded {
  border-radius: 9999px;
}

.button--disabled {
  cursor: not-allowed;
  background-color: rgba(0, 0, 0, 0.04);
  border-color: #d9d9d9;
  color: #d9d9d9;
}
</style>
