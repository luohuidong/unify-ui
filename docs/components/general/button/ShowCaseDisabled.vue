<script setup lang="ts">
import { UniButton } from "unify-ui";

function handleClick() {
  console.log("button disabled");
}
</script>

<template>
  <div class="container">
    <div>
      <UniButton disabled @click="handleClick">Secondary Button</UniButton>
    </div>

    <div>
      <UniButton type="primary" disabled>Primary Button</UniButton>
    </div>

    <div>
      <UniButton type="soft" disabled>Soft Button</UniButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
</style>
