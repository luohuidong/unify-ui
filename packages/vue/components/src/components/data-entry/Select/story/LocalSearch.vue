<script setup lang="ts">
import { ref } from "vue";
import { UniSelect, UniSelectOption } from "@/index";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cat", value: "cat" },
  { label: "Dog", value: "dog" },
];

const value = ref<string>();
</script>

<template>
  <div class="container">
    <UniSelect v-model="value" local-search>
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
.container {
  width: 500px;
  height: 500px;
  padding: 20px;
}
</style>
