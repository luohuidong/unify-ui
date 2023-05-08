<script setup lang="ts">
import { ref } from "vue";
import { UniInput } from "unify-ui";
const value = ref("disabled");
</script>

<template>
  <div class="container">
    <div>
      <UniInput v-model="value" disabled>
        <template #inline-leading-add-on>
          <span>http://</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput v-model="value" disabled>
        <template #inline-trailing-add-on>
          <span>.com</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput v-model="value" disabled>
        <template #inline-leading-add-on>
          <span>http://</span>
        </template>

        <template #inline-trailing-add-on>
          <span>.com</span>
        </template>
      </UniInput>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container > div {
  margin-bottom: 20px;
}
</style>
