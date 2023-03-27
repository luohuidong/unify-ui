<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzToolTip",
});
</script>

<script lang="ts" setup>
import { EzPopup } from "@/components";

defineProps<{
  title: string;
  placement: "top" | "bottom" | "left" | "right";
  appendToBody?: boolean;
  disabled?: boolean;
}>();
</script>

<template>
  <EzPopup :append-to-body="appendToBody" :placement="placement" :disabled="disabled">
    <slot></slot>

    <template #content>
      {{ title }}
    </template>
  </EzPopup>
</template>
