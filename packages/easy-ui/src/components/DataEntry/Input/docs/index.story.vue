<script setup lang="ts">
import { ref } from "vue";
import EzInput from "../index.vue";

const value = ref("allan@mail.com");
</script>

<template>
  <Story title="Data Entry/Input">
    <Variant title="Basic usage">
      <div class="container">
        <EzInput v-model="value" />
        <EzInput placeholder="you@email.com"></EzInput>
        <EzInput v-model="value" disabled></EzInput>
      </div>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
