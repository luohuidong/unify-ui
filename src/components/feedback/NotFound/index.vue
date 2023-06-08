<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniNotFound",
});
</script>

<script setup lang="ts">
import { useI18n } from "unify-ui/i18n";

withDefaults(
  defineProps<{
    align?: "left" | "center" | "right";
  }>(),
  {
    align: "center",
  }
);

const { t } = useI18n();
</script>

<template>
  <div
    class="not-found"
    :class="{
      ['not-found--align-left']: align === 'left',
      ['not-found--align-center']: align === 'center',
      ['not-found--align-right']: align === 'right',
    }"
  >
    <p class="not-found__text">404</p>
    <h1 class="not-found__heading">{{ t("not_found.title") }}</h1>
    <p class="not-found__hint">{{ t("not_found.prompt") }}</p>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.not-found--align-left {
  align-items: flex-start;
}

.not-found--align-center {
  align-items: center;
}

.not-found--align-right {
  align-items: flex-end;
}

%text {
  margin: 0;
  font-size: 16px;
  line-height: 24px;
}

.not-found__text {
  @extend %text;
  color: rgb(79, 70, 229);
  font-weight: 600;
}

.not-found__heading {
  margin: 0;
  font-size: 48px;
  line-height: 48px;
  margin-top: 16px;
}

.not-found__hint {
  @extend %text;
  margin-top: 24px;
}
</style>
