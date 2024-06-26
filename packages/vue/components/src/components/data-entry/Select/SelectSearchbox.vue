<script setup lang="ts">
import { debounce } from "lodash-es";

import { UniInput } from "@/index";
import { useStore } from "./composables";

const { state, rootEmits, rootProps } = useStore();

function handleInput(value: string) {
  state.searchInputValue = value;
  if (rootProps.remoteSearch) {
    rootEmits("search", value);
  }
}

const debounceHandleInput = debounce(handleInput, 500);
</script>

<template>
  <div :class="$style.searchbox">
    <UniInput :class="$style.searchbox__input" @input="debounceHandleInput"></UniInput>
  </div>
</template>

<style lang="scss" module>
.searchbox {
  position: sticky;
  top: 0;
  padding: 10px;
  background: white;
}

.searchbox__input {
  width: 100%;
}
</style>
