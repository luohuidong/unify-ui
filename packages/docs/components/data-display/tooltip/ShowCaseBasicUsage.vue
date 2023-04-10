<script setup lang="ts">
import { EzButton, EzTooltip } from "@luohuidong/easy-ui";
</script>

<template>
  <div class="container">
    <div>
      <EzTooltip title="Tooltip text" placement="top">
        <EzButton>Hover over me!</EzButton>
      </EzTooltip>
    </div>

    <div>
      <EzTooltip title="Tooltip text" placement="bottom" append-to-body>
        <EzButton>Tooltip append to body</EzButton>
      </EzTooltip>
    </div>

    <div>
      <EzTooltip title="Tooltip text" placement="left">
        <EzButton>Hover over me!</EzButton>
      </EzTooltip>
    </div>

    <div>
      <EzTooltip title="Tooltip text" placement="right" append-to-body>
        <EzButton>Tooltip append to body</EzButton>
      </EzTooltip>
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
