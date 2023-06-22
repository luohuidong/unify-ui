<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniSelect",
});
</script>

<script setup lang="ts" generic="T extends string | number | undefined">
import { ref } from "vue";

import { UniPopup } from "@/components";
import CloseIcon from "./icons/Close.vue";
import ArrowIcon from "./icons/Arrow.vue";

defineProps<{
  modelValue: T;
  placeholder?: string;
  options: { label: string; value: T }[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: T | undefined): void;
  (e: "change", value: T | undefined): void;
}>();

const visible = ref(false);
function visibleChange() {
  visible.value = !visible.value;
}

function handleItemClick(value: T) {
  emit("update:modelValue", value);
  emit("change", value);
  visibleChange();
}

function handleClear() {
  emit("update:modelValue", undefined);
  emit("change", undefined);
}
</script>

<template>
  <uni-popup placement="bottom" trigger="controlled" :visible="visible" :show-arrow="false">
    <span
      :class="{ [$style['select__trigger']]: true, [$style['select__trigger--with-value']]: modelValue }"
      @click="visibleChange"
    >
      <input :class="$style['select__input']" :placeholder="placeholder" readonly :value="modelValue" />

      <span :class="$style['select__icons']">
        <span :class="$style['select__icon-arrows']">
          <arrow-icon :class="[$style['select__icon-arrow'], $style['select__icon-arrow--up']]"></arrow-icon>
          <arrow-icon :class="[$style['select__icon-arrow'], $style['select__icon-arrow--down']]"></arrow-icon>
        </span>
        <close-icon :class="$style['select__icon-close']" @click.stop="handleClear"></close-icon>
      </span>
    </span>

    <template #content>
      <ul :class="$style['select__options']">
        <li
          v-for="option in options"
          :key="option.value"
          :class="{ [$style['select__option']]: true, [$style['select__option--active']]: option.value === modelValue }"
          @click="handleItemClick(option.value)"
        >
          <slot name="option">{{ option.value }}</slot>
        </li>
      </ul>
    </template>
  </uni-popup>
</template>

<style lang="scss" module>
@use "@/styles/form";

.select__trigger {
  position: relative;
  display: inline-block;
  height: form.$control-height;
  width: 250px;
  box-sizing: border-box;
  overflow: hidden;

  font-size: form.$font-size-sm;
  line-height: 24px;
  border: 1px solid rgb(229, 231, 235);
  background: rgb(255, 255, 255);
  border-radius: form.$radius;
  cursor: pointer;

  &:focus-within {
    border: 1px solid form.$border-color-active;
    outline: 1px solid form.$outline-color-active;
  }

  &.select__trigger--with-value:hover {
    .select__icon-arrows {
      display: none;
    }
    .select__icon-close {
      display: block;
    }
  }
}

.select__input {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 0 40px 0 12px;
  color: form.$font-color;
  font-size: form.$font-size-sm;
  cursor: pointer;
  border: none;
  outline: none;
}

.select__icons {
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  .select__icon-arrows {
    display: flex;
    flex-direction: column;

    .select__icon-arrow {
      color: form.$icon-color;
      width: 10px;
      height: 10px;

      &.select__icon-arrow--up {
        transform: rotate(90deg);
      }
      &.select__icon-arrow--down {
        transform: rotate(-90deg);
      }
    }
  }

  .select__icon-close {
    display: none;
    color: form.$icon-color;
    &:hover {
      color: form.$icon-color-active;
    }
  }
}

.select__options {
  min-width: 250px;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
}

.select__option {
  box-sizing: border-box;
  height: form.$control-height;
  padding: 0 form.$control-padding-x;
  display: flex;
  align-items: center;

  color: form.$font-color;
  font-size: form.$font-size-sm;
  font-weight: normal;
  align-content: center;
  cursor: pointer;

  &:hover,
  &.select__option--active {
    color: #ffffff;
    background: form.$background-color-active;
  }
}
</style>
