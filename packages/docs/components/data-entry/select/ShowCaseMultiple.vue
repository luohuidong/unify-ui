<script setup lang="ts">
import { ref } from "vue";
import { UniSelect, UniSelectOption } from "unify-ui";

const options = [
  { label: "Option1", value: "a" },
  { label: "Option2", value: "b" },
  { label: "Option3", value: "c" },
  { label: "Option4", value: "d" },
  { label: "Option5", value: "e" },
  { label: "Option6", value: "f" },
];

const value = ref<Set<string>>(new Set(["a", "b"]));
</script>

<template>
  <div>
    <UniSelect v-model="value" multiple class="select">
      <UniSelectOption
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></UniSelectOption>
    </UniSelect>
  </div>
</template>

<style scoped>
.select {
  width: 500px;
}
</style>
