<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SToolTip",
});
</script>

<script lang="ts" setup>
import { Popup } from "@/components";

defineProps<{
  title: string;
  placement: "top" | "bottom" | "left" | "right";
  appendToBody?: boolean;
}>();
</script>

<template>
  <Popup :append-to-body="appendToBody" :placement="placement">
    <slot></slot>

    <template #content>
      {{ title }}
    </template>
  </Popup>
</template>
