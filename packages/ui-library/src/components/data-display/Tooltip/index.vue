<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniToolTip",
});
</script>

<script lang="ts" setup>
import { UniPopup } from "@/components";

withDefaults(
  defineProps<{
    /** The content of the tooltip */
    title: string;
    /** The placement of the tooltip */
    placement: "top" | "bottom" | "left" | "right";
    /** Whether the tooltip is disabled */
    disabled?: boolean;
    /** Append */
    appendToBody?: boolean;
  }>(),
  {
    appendToBody: true,
  }
);
</script>

<template>
  <UniPopup
    :placement="placement"
    :disabled="disabled"
    :overlay-class-name="$style.overlay"
    :append-to-body="appendToBody"
  >
    <slot></slot>

    <template #content>
      {{ title }}
    </template>
  </UniPopup>
</template>

<style lang="scss" module>
.overlay {
  padding: 8px 12px;
  background: black;
  color: white;
}
</style>
