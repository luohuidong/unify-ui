<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DatePickerHeader",
});
</script>

<script setup lang="ts">
import { ArrowLeft, ArrowRight, DoubleArrowLeft, DoubleArrowRight } from "@/icons";

withDefaults(
  defineProps<{
    arrows?: ("single" | "double")[];
  }>(),
  {
    arrows: () => ["single", "double"],
  }
);

defineEmits<{
  (e: "arrowLeftClick"): void;
  (e: "dobuleArrowLeftClick"): void;
  (e: "arrowRightClick"): void;
  (e: "dobuleArrowRightClick"): void;
}>();
</script>

<template>
  <div :class="$style.header">
    <div :class="$style['header__icons']">
      <DoubleArrowLeft
        v-if="arrows.includes('double')"
        :class="$style.header__icon"
        @click="$emit('dobuleArrowLeftClick')"
      />
      <ArrowLeft v-if="arrows.includes('single')" :class="$style.header__icon" @click="$emit('arrowLeftClick')" />
    </div>

    <div :class="$style['header__center']">
      <slot></slot>
    </div>

    <div :class="$style['header__icons']">
      <ArrowRight v-if="arrows.includes('single')" :class="[$style.header__icon]" @click="$emit('arrowRightClick')" />
      <DoubleArrowRight
        v-if="arrows.includes('double')"
        :class="[$style.header__icon]"
        @click="$emit('dobuleArrowRightClick')"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
@use "@/styles/color";

.header {
  display: flex;
  align-items: center;
  padding: 25px 30px 10px;
  justify-content: space-between;
  user-select: none;
}

.header__center {
  flex: 1;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}

.header__icons {
  display: flex;
  align-items: center;
  user-select: none;
}

.header__icon {
  height: 20px;
  width: 20px;
  cursor: pointer;
  color: rgb(156, 163, 175);
  text-align: center;

  &:hover {
    color: rgb(107 114 128);
  }
}
</style>
