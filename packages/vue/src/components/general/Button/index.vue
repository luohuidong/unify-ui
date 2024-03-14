<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniButton",
});
</script>

<script setup lang="ts">
import "@unify-ui/web-components/dist/button";

const props = withDefaults(
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

function handleClick(e: MouseEvent) {
  if (!props.disabled) {
    emits("click", e);
  }
}
</script>

<template>
  <u-button
    :type="type"
    :html-type="htmlType"
    :size="size"
    :disabled="disabled"
    :rounded="rounded"
    @click="handleClick"
  >
    <slot></slot>
  </u-button>
</template>
