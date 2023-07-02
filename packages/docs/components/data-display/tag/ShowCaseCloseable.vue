<script setup lang="ts">
import { ref } from "vue";
import { UniTag } from "unify-ui";

const originPreset = ["default", "info", "success", "warning", "error"] as const;
const presets = ref(new Set(originPreset as typeof originPreset));

function handleClose(tag: (typeof originPreset)[number]) {
  presets.value.delete(tag);
}
</script>

<template>
  <div>
    <UniTag
      v-for="preset of presets"
      :key="preset"
      :type="preset"
      closable
      @close="handleClose(preset)"
    >
      {{ preset }}
    </UniTag>
  </div>
</template>
