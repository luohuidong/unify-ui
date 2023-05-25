<script setup lang="ts">
import { UniButton } from "unify-ui";
</script>

<template>
  <div class="container">
    <div>
      <UniButton rounded>Button1</UniButton>
    </div>

    <div>
      <UniButton type="primary" rounded>Button2</UniButton>
    </div>

    <div>
      <UniButton type="soft" rounded>Button3</UniButton>
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
