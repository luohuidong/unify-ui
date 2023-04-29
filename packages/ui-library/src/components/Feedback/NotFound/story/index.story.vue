<script setup lang="ts">
import EzNotFound from "../index.vue";
</script>

<template>
  <Story title="Feedback/NotFound">
    <div class="container">
      <div>
        <EzNotFound></EzNotFound>
      </div>

      <div>
        <EzNotFound align="right"></EzNotFound>
      </div>

      <div>
        <EzNotFound align="left"></EzNotFound>
      </div>
    </div>
  </Story>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: repeat(3, 200px);
  gap: 20px;
}
</style>
