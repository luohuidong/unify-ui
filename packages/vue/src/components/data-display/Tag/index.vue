<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniTag",
});
</script>

<script setup lang="ts">
import { Close } from "@/icons";

withDefaults(
  defineProps<{
    type?: "default" | "success" | "info" | "warning" | "error";
    closable?: boolean;
  }>(),
  {
    type: "default",
  }
);

const emit = defineEmits<{
  (e: "close"): void;
}>();

defineSlots<{
  default(props: {}): any;
}>();

function handleClose() {
  emit("close");
}
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

    <Close v-if="closable" data-test="close-icon" :class="$style['close-icon']" @click.stop="handleClose"></Close>
  </span>
</template>

<style lang="scss" module>
@use "@/styles/color";
@use "@/styles/type";

.tag {
  @include type.text-xs;

  display: inline-flex;
  align-items: center;
  margin-right: 6px;
  padding: 4px 8px;

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

.close-icon {
  height: 14px;
  width: 14px;
  margin-left: 6px;
  cursor: pointer;
}
</style>
