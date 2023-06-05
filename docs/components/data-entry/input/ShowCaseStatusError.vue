<script setup lang="ts">
import { UniInput } from "unify-ui";
</script>

<template>
  <div class="container">
    <div>
      <UniInput status="error" class="input-cls"></UniInput>
    </div>

    <div>
      <UniInput status="error" class="input-cls">
        <template #inline-leading-add-on>
          <span>http://</span>
        </template>

        <template #inline-trailing-add-on>
          <span>.com</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput status="error" class="input-cls">
        <template #leading-add-on>
          <span>http://</span>
        </template>

        <template #trailing-add-on>
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

.input-cls {
  width: 300px;
}
</style>
