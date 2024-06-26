<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniConfigProvider",
});
</script>

<script setup lang="ts">
import { provide, watch } from "vue";

import { configKey, GlobalConfig } from "./utils";

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

watch(
  () => [props.locale, props.fallbackLocale],
  ([locale, fallbackLocale]) => {
    const config = GlobalConfig.getInstance().config;
    config.locale = locale;
    config.fallbackLocale = fallbackLocale;
  }
);

defineSlots<{
  default(props: {}): any;
}>();
</script>

<template>
  <slot></slot>
</template>
