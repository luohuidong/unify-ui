<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VMButton",
});
</script>

<script setup lang="ts">
import { computed } from "vue";

import { vRipple } from "@/directives/ripple";
import useRipples from "@/use/useRipples";
import TextButton from "./TextButton.vue";
import ContainedButton from "./ContainedButton.vue";
import OutlinedButton from "./OutlinedButton.vue";

const props = defineProps<{
  type: "text" | "outlined" | "contained";
  text: string;
}>();

const emits = defineEmits(["click"]);

const rippleColor = computed(() => {
  let color = "#d4bff9";
  switch (props.type) {
    case "text":
      color = "#d4bff9";
      break;
    case "contained":
      color = "#9965f4";
      break;
    case "outlined":
      color = "#d4bff9";
      break;
    default:
      break;
  }
  return color;
});
const { createRipples } = useRipples();

function handleClick(e: MouseEvent) {
  emits("click", e);
}

function handleMousedown(e: MouseEvent) {
  if (e.currentTarget) {
    createRipples(e, {
      container: e.currentTarget as HTMLButtonElement,
      rippleColor: rippleColor.value,
    });
  }
}

const buttonComponent = {
  text: TextButton,
  contained: ContainedButton,
  outlined: OutlinedButton,
};
</script>

<template>
  <component
    :is="buttonComponent[type]"
    v-ripple="{ rippleColor }"
    @click="handleClick"
    @mousedown="handleMousedown"
  >
    <span :class="$style.buttonText">{{ props.text }}</span>
  </component>
</template>

<style lang="scss" module>
.buttonText {
  box-sizing: border-box;
}
</style>
