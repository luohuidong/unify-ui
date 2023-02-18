<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SModalDrawer",
});
</script>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

import Scrim from "../Scrim.vue";
import BaseDrawer from "./BaseDrawer.vue";

defineProps<{
  visible: boolean;
}>();

const emits = defineEmits(["update:visible"]);

function handleCloseDrawer(event: KeyboardEvent) {
  if (event.key.toLowerCase() === "escape") {
    emits("update:visible", false);
  }
}
onMounted(() => {
  document.addEventListener("keyup", handleCloseDrawer);
});
onUnmounted(() => {
  document.removeEventListener("keyup", handleCloseDrawer);
});

function handleClick() {
  emits("update:visible", false);
}
</script>

<template>
  <teleport to="body">
    <Scrim v-show="visible" @click="handleClick">
      <BaseDrawer></BaseDrawer>
    </Scrim>
  </teleport>
</template>

<style lang="scss" module></style>
