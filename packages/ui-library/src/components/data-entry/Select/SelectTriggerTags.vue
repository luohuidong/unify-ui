<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniSelectTriggerTags",
});
</script>

<script setup lang="ts">
import { computed } from "vue";
import { UniTag } from "@/components";
import { useStore } from "./composables/useStore";

import type { ModelValueMultiple } from "./types";
const { rootProps, state } = useStore();

const datas = computed(() => rootProps.modelValue as ModelValueMultiple);
</script>

<template>
  <div :class="$style.container">
    <uni-tag v-for="value in datas" :key="value" :style="{ margin: 0 }">
      {{ state.valueLabelMap.get(value) }}
    </uni-tag>
  </div>
</template>

<style lang="scss" module>
@use "@/styles/form";

.container {
  box-sizing: border-box;
  min-height: form.$control-height;
  padding: 4px 40px 4px form.$control-padding-x;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
}
</style>
