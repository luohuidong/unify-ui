<script setup lang="ts">
import { ref } from "vue";
import { EzInput } from "unify-ui";

const value = ref("");
</script>

<template>
  <div class="container">
    <div>
      <EzInput v-model="value" disabled>
        <template #leading-add-on>
          <span>http://</span>
        </template>
      </EzInput>
    </div>

    <div>
      <EzInput v-model="value" disabled>
        <template #trailing-add-on>
          <span>.com</span>
        </template>
      </EzInput>
    </div>

    <div>
      <EzInput v-model="value" disabled>
        <template #leading-add-on>
          <span>http://</span>
        </template>

        <template #trailing-add-on>
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
