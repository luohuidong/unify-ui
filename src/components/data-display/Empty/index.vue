<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniEmpty",
});
</script>

<script setup lang="ts">
import EmptyIcon from "./EmptyIcon.vue";
</script>

<template>
  <div class="empty">
    <EmptyIcon class="empty__icon"></EmptyIcon>
    <span class="empty__text">No Data</span>
  </div>
</template>

<style lang="scss" scoped>
$color: rgba(0, 0, 0, 0.25);

.empty {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.empty__icon {
  height: 67px;
  width: 60px;
  color: $color;
}

.empty__text {
  font-size: 14px;
  color: $color;
}
</style>
