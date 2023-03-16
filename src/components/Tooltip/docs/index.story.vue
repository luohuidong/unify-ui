<script setup lang="ts">
import { EzButton } from "@/components";
import STooltip from "../index.vue";
</script>

<template>
  <Story title="Date Display/Tooltip">
    <div class="container">
      <div>
        <STooltip title="Tooltip text" placement="top">
          <EzButton>Hover over me!</EzButton>
        </STooltip>
      </div>

      <div>
        <STooltip title="Tooltip text" placement="bottom" append-to-body>
          <EzButton>Tooltip append to body</EzButton>
        </STooltip>
      </div>

      <div>
        <STooltip title="Tooltip text" placement="left">
          <EzButton>Hover over me!</EzButton>
        </STooltip>
      </div>

      <div>
        <STooltip title="Tooltip text" placement="right" append-to-body>
          <EzButton>Tooltip append to body</EzButton>
        </STooltip>
      </div>
    </div>
  </Story>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 400px 400px;
  grid-template-rows: 400px;
  align-items: center;
  justify-items: center;
}
</style>
