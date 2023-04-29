<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzNotFound",
});
</script>

<script setup lang="ts">
withDefaults(
  defineProps<{
    align?: "left" | "center" | "right";
  }>(),
  {
    align: "center",
  }
);
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
    <h1 class="not-found__heading">Page not found</h1>
    <p class="not-found__hint">Sorry, we couldn't find the page you're looking for.</p>
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
