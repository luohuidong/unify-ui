<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniConfigProvider",
});
</script>

<script setup lang="ts">
import { provide } from "vue";
import { configKey, type ConfigProviderProps } from "unify-ui/composable/useConfig";

const props = defineProps<ConfigProviderProps>();
provide(configKey, props);
</script>

<template>
  <slot></slot>
</template>

<style lang="scss" scoped></style>
