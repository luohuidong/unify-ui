<script setup lang="ts">
import { UniButton } from "unify-ui/components";
import UniToolTip from "../index.vue";
</script>

<template>
  <div class="container">
    <div>
      <UniToolTip title="Tooltip text" placement="top">
        <UniButton>Hover over me!</UniButton>
      </UniToolTip>
    </div>

    <div>
      <UniToolTip title="Tooltip text" placement="bottom" append-to-body>
        <UniButton>Tooltip append to body</UniButton>
      </UniToolTip>
    </div>

    <div>
      <UniToolTip title="Tooltip text" placement="left">
        <UniButton>Hover over me!</UniButton>
      </UniToolTip>
    </div>

    <div>
      <UniToolTip title="Tooltip text" placement="right" append-to-body>
        <UniButton>Tooltip append to body</UniButton>
      </UniToolTip>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 400px 400px;
  grid-template-rows: 400px;
  align-items: center;
  justify-items: center;
}
</style>
