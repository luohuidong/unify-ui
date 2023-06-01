<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniEmpty",
});
</script>

<script setup lang="ts">
import { useI18n } from "unify-ui/composables/useI18n";
import EmptyIcon from "./EmptyIcon.vue";

const { t } = useI18n();
</script>

<template>
  <div class="empty">
    <EmptyIcon class="empty__icon"></EmptyIcon>
    <span class="empty__text">{{ t("empty.no_data") }}</span>
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
