<script setup lang="ts">
import STooltip from "../index.vue";
</script>

<template>
  <Story title="Date Display/Tooltip">
    <div class="container">
      <STooltip title="Tooltip text">
        <span class="text">Hover over me!</span>
      </STooltip>
    </div>
  </Story>
</template>

<style scoped>
.container {
  margin: 50px;
}

.text {
  border-bottom: 1px dotted black;
}
</style>
