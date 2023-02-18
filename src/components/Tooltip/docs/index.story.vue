<script setup lang="ts">
import { EzButton } from "@/components";
import STooltip from "../index.vue";
</script>

<template>
  <Story title="Date Display/Tooltip">
    <div class="container">
      <div>
        <STooltip title="Tooltip text" placement="top">
          <EzButton type="text" text="Hover over me!" />
        </STooltip>
      </div>

      <div>
        <STooltip title="Tooltip text" placement="bottom" append-to-body>
          <EzButton type="outlined" text="Tooltip append to body" />
        </STooltip>
      </div>

      <div>
        <STooltip title="Tooltip text" placement="left">
          <EzButton type="text" text="Hover over me!" />
        </STooltip>
      </div>

      <div>
        <STooltip title="Tooltip text" placement="right" append-to-body>
          <EzButton type="outlined" text="Tooltip append to body" />
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
