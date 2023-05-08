<script setup lang="ts">
import { UniButton, UniToolTip } from "unify-ui";
</script>

<template>
  <div class="container">
    <div>
      <UniToolTip title="Tooltip text" placement="top">
        <UniButton type="soft">Hover over me!</UniButton>
      </UniToolTip>
    </div>

    <div>
      <UniToolTip title="Tooltip text" placement="bottom" append-to-body>
        <UniButton type="soft">Tooltip append to body</UniButton>
      </UniToolTip>
    </div>

    <div>
      <UniToolTip title="Tooltip text" placement="left">
        <UniButton type="soft">Hover over me!</UniButton>
      </UniToolTip>
    </div>

    <div>
      <UniToolTip title="Tooltip text" placement="right" append-to-body>
        <UniButton type="soft">Tooltip append to body</UniButton>
      </UniToolTip>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 200px);
  align-items: center;
  justify-items: center;
}
</style>
