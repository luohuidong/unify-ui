<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniSelectTriggerIcons",
});
</script>

<script setup lang="ts">
import { ArrowLeft as ArrowIcon, CloseOutline as CloseIcon } from "@/icons";
import { useStore } from "./composables/useStore";

defineProps<{
  arrowIconsWrapperClass: string;
  closeIconClass: string;
}>();

const { actions } = useStore();
</script>

<template>
  <span :class="$style['icons']">
    <span :class="[$style['icon-arrow-wrapper'], arrowIconsWrapperClass]">
      <arrow-icon :class="[$style['icon-arrow'], $style['select__icon-arrow--up']]"></arrow-icon>
      <arrow-icon :class="[$style['icon-arrow'], $style['select__icon-arrow--down']]"></arrow-icon>
    </span>

    <close-icon :class="[$style['icon-close'], closeIconClass]" @click.stop="actions.handleClear"></close-icon>
  </span>
</template>

<style lang="scss" module>
@use "@/styles/form";

.icons {
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.icon-arrow-wrapper {
  display: flex;
  flex-direction: column;
}

.icon-arrow {
  color: form.$icon-color;
  width: 12px;
  height: 12px;

  &.select__icon-arrow--up {
    transform: rotate(90deg);
  }
  &.select__icon-arrow--down {
    transform: rotate(-90deg);
  }
}

.icon-close {
  display: none;
  color: form.$icon-color;
  &:hover {
    color: form.$icon-color-active;
  }
}
</style>
