<script setup lang="ts">
import { ref } from "vue";
import { EzInput } from "unify-ui";
const value = ref("");
</script>

<template>
  <div class="container">
    <div>
      <EzInput v-model="value">
        <template #inline-leading-add-on>
          <span>http://</span>
        </template>
      </EzInput>
    </div>

    <div>
      <EzInput v-model="value">
        <template #inline-trailing-add-on>
          <span>.com</span>
        </template>
      </EzInput>
    </div>

    <div>
      <EzInput v-model="value">
        <template #inline-leading-add-on>
          <span>http://</span>
        </template>

        <template #inline-trailing-add-on>
          <span>.com</span>
        </template>
      </EzInput>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container > div {
  margin-bottom: 20px;
}
</style>
