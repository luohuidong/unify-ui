<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniTag",
});
</script>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type: "default" | "success" | "info" | "warning" | "error";
  }>(),
  {
    type: "default",
  }
);

defineSlots<{
  default(props: {}): any;
}>();
</script>

<template>
  <span
    :class="[
      $style.tag,
      $style['tag--type-default'],
      {
        [$style['tag--type-info']]: type === 'info',
        [$style['tag--type-success']]: type === 'success',
        [$style['tag--type-warning']]: type === 'warning',
        [$style['tag--type-error']]: type === 'error',
      },
    ]"
  >
    <slot></slot>
  </span>
</template>

<style lang="scss" module>
@use "@/styles/color";

.tag {
  margin-right: 6px;
  padding: 4px 8px;
  font-size: 12px;
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
}

.tag--type-default {
  color: color.$gray-500;
  background: color.$gray-50;
  border-color: color.$gray-200;
}

.tag--type-info {
  color: color.$info-font;
  background: color.$info-background;
  border-color: color.$info-border;
}

.tag--type-success {
  color: color.$success-font;
  background: color.$success-background;
  border-color: color.$success-border;
}

.tag--type-error {
  color: color.$error-font;
  background: color.$error-background;
  border-color: color.$error-border;
}

.tag--type-warning {
  color: color.$warning-font;
  background: color.$warning-background;
  border-color: color.$warning-border;
}
</style>
