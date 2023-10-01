<script setup lang="ts">
import { UniInput } from "@/components";
import { useStore } from "./composables";

const { state } = useStore();
</script>

<template>
  <div :class="$style.searchbox">
    <UniInput v-model="state.searchInputValue" :class="$style.searchbox__input"></UniInput>
  </div>
</template>

<style lang="scss" module>
.searchbox {
  padding: 10px;
}

.searchbox__input {
  width: 100%;
}
</style>
