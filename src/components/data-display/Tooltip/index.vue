<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniToolTip",
});
</script>

<script lang="ts" setup>
import { UniPopup } from "unify-ui/components";

defineProps<{
  /** The content of the tooltip */
  title: string;
  /** The placement of the tooltip */
  placement: "top" | "bottom" | "left" | "right";
  /** Whether to append the tooltip to body */
  appendToBody?: boolean;
  /** Whether the tooltip is disabled */
  disabled?: boolean;
}>();
</script>

<template>
  <UniPopup :append-to-body="appendToBody" :placement="placement" :disabled="disabled">
    <slot></slot>

    <template #content>
      {{ title }}
    </template>
  </UniPopup>
</template>
