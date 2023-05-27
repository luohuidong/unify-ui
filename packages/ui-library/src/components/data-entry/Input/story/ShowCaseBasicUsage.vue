<script setup lang="ts">
import { ref } from "vue";

import UniInput from "../index.vue";

const value = ref("allan@mail.com");
</script>

<template>
  <div class="container">
    <div>
      <UniInput v-model="value" />
    </div>
    <div>
      <UniInput placeholder="placeholder: you@email.com"></UniInput>
    </div>
    <div>
      <UniInput v-model="value" disabled></UniInput>
    </div>
    <div>
      <UniInput v-model="value" readonly></UniInput>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 500px;
  padding: 20px;
}

.container > div {
  padding: 20px;
}
</style>
