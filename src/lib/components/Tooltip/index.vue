<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SToolTip",
});
</script>

<script lang="ts" setup>
import { Propup } from "@/lib/components";

defineProps<{
  title: string;
  placement: "top" | "bottom" | "left" | "right";
  appendToBody?: boolean;
}>();
</script>

<template>
  <Propup :overlay-append-to-body="appendToBody" :overlay-placement="placement">
    <slot></slot>

    <template #content>
      {{ title }}
    </template>
  </Propup>
</template>
