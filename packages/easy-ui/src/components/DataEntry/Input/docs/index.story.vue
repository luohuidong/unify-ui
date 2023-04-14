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
        <EzInput placeholder="placeholder: you@email.com"></EzInput>
        <EzInput v-model="value" disabled></EzInput>
      </div>
    </Variant>

    <Variant title="Inline leading add-on">
      <EzInput>
        <template #inline-leading-add-on>
          <span class="inline-leading-add-on">http://</span>
        </template>
      </EzInput>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  padding: 20px;
}
</style>
