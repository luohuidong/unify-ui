<script setup lang="ts">
import STooltip from "../index.vue";
</script>

<template>
  <Story title="Date Display/Tooltip">
    <STooltip v-slot="{ setRef }" title="Tooltip text" placement="top">
      <button :ref="(el) => setRef(el as Element)" class="button">Hover over me!</button>
    </STooltip>

    <STooltip v-slot="{ setRef }" title="Tooltip text" placement="top" append-to-body>
      <button :ref="(el) => setRef(el as Element)" class="button">Tooltip append to body</button>
    </STooltip>
  </Story>
</template>

<style scoped>
.container {
  margin: 50px;
  height: 400px;
  border: 1px solid grey;
  overflow: scroll;
}

.inner-container {
  height: 800px;
}

.button {
  background: gainsboro;
  border: none;
  padding: 20px;
  margin: 10px;
}
</style>
