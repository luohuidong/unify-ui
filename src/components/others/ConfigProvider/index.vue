<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniConfigProvider",
});
</script>

<script setup lang="ts">
import { provide } from "vue";

import { configKey } from "./utils";

const props = withDefaults(
  defineProps<{
    locale?: "en-US" | "zh-CN";
    fallbackLocale?: "en-US" | "zh-CN";
  }>(),
  {
    locale: "en-US",
    fallbackLocale: "en-US",
  }
);
provide(configKey, props);

defineSlots<{
  default(props: {}): any;
}>();
</script>

<template>
  <slot></slot>
</template>

<style lang="scss" scoped></style>
