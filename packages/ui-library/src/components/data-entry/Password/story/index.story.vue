<script setup lang="ts">
import { ref, watch } from "vue";

import UniPassword from "../index.vue";

const value = ref("");

watch(value, (value) => {
  console.log(value);
});
</script>

<template>
  <Story title="Data Entry/Password">
    <div class="container">
      <div>
        <UniPassword v-model="value"></UniPassword>
      </div>
    </div>
  </Story>
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
