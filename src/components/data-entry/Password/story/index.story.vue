<script setup lang="ts">
import { ref, watch } from "vue";

import UniPassword from "../index.vue";

const value = ref("");

watch(value, (value) => {
  console.log(value);
});

function handleChange(value: string) {
  console.log("handleChange", value);
}

function handleInput(value: string) {
  console.log("handleInput", value);
}
</script>

<template>
  <Story title="Data Entry/Password">
    <Variant title="Basic Usage">
      <div class="container">
        <UniPassword v-model="value" @change="handleChange" @input="handleInput"></UniPassword>
      </div>
    </Variant>

    <Variant title="Placeholder">
      <div class="container">
        <UniPassword v-model="value" placeholder="Please enter password"></UniPassword>
      </div>
    </Variant>

    <Variant title="Disabled">
      <div class="container">
        <UniPassword v-model="value" disabled></UniPassword>
      </div>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
.container {
  height: 500px;
  padding: 20px;
}
</style>
