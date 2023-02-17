<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VMButton",
});
</script>

<script setup lang="ts">
import TextButton from "./TextButton.vue";
import ContainedButton from "./ContainedButton.vue";
import OutlinedButton from "./OutlinedButton.vue";

const props = defineProps<{
  type: "text" | "outlined" | "contained";
  text: string;
}>();

const emits = defineEmits(["click"]);

function handleClick(e: MouseEvent) {
  emits("click", e);
}

const buttonComponent = {
  text: TextButton,
  contained: ContainedButton,
  outlined: OutlinedButton,
};
</script>

<template>
  <component :is="buttonComponent[type]" @click="handleClick">
    <span :class="$style.buttonText">{{ props.text }}</span>
  </component>
</template>

<style lang="scss" module>
.buttonText {
  box-sizing: border-box;
}
</style>
