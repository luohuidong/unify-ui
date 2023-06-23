<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniSelect",
});
</script>

<script setup lang="ts" generic="T extends string | number | undefined">
import { onMounted, onUnmounted, ref } from "vue";

import { UniPopup } from "@/components";
import CloseIcon from "./icons/Close.vue";
import ArrowIcon from "./icons/Arrow.vue";
import TickIcon from "./icons/Tick.vue";

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
const triggerRef = ref<HTMLSpanElement>();
const floatingElementWidth = ref("250px");
const optionsRef = ref<HTMLUListElement>();

function visibleChange() {
  visible.value = !visible.value;
}

function handleTriggerClick() {
  triggerRef.value && (floatingElementWidth.value = (triggerRef.value.offsetWidth || 250) + "px");
  visibleChange();
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

function handleDocumentClick(e: MouseEvent) {
  if (!triggerRef.value || !optionsRef.value) return;

  const path = e.composedPath();
  if (!path.includes(triggerRef.value) && !path.includes(optionsRef.value)) {
    visible.value = false;
  }
}
onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
});
onUnmounted(() => {
  document.removeEventListener("click", handleDocumentClick);
});
</script>

<template>
  <uni-popup placement="bottom" trigger="controlled" :visible="visible" :show-arrow="false">
    <span
      ref="triggerRef"
      :class="{ [$style['trigger']]: true, [$style['trigger--with-value']]: modelValue }"
      @click="handleTriggerClick"
    >
      <input :class="$style['trigger__input']" :placeholder="placeholder" readonly :value="modelValue" />

      <span :class="$style['trigger__icons']">
        <span :class="$style['trigger__icon-arrow-wrapper']">
          <arrow-icon :class="[$style['trigger__icon-arrow'], $style['select__icon-arrow--up']]"></arrow-icon>
          <arrow-icon :class="[$style['trigger__icon-arrow'], $style['select__icon-arrow--down']]"></arrow-icon>
        </span>
        <close-icon :class="$style['trigger__icon-close']" @click.stop="handleClear"></close-icon>
      </span>
    </span>

    <template #content>
      <ul ref="optionsRef" :class="$style['options']" :style="{ width: floatingElementWidth }">
        <li
          v-for="option in options"
          :key="option.value"
          :class="$style['option']"
          @click="handleItemClick(option.value)"
        >
          <slot name="option">
            <div :class="$style['option__default-content']">
              <span
                :class="{
                  [$style['option__default-content-label']]: true,
                  [$style['option__default-content-label--active']]: option.value === modelValue,
                }"
              >
                {{ option.label }}
              </span>
              <tick-icon v-if="option.value === modelValue" :class="$style['option__default-content-icon']"></tick-icon>
            </div>
          </slot>
        </li>
      </ul>
    </template>
  </uni-popup>
</template>

<style lang="scss" module>
@use "@/styles/color";
@use "@/styles/form";

.trigger {
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
}

.trigger--with-value:hover {
  .trigger__icon-arrow-wrapper {
    display: none;
  }
  .trigger__icon-close {
    display: block;
  }
}

.trigger__input {
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

.trigger__icons {
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  .trigger__icon-arrow-wrapper {
    display: flex;
    flex-direction: column;

    .trigger__icon-arrow {
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

  .trigger__icon-close {
    display: none;
    color: form.$icon-color;
    &:hover {
      color: form.$icon-color-active;
    }
  }
}

.options {
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
}

.option__default-content {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover .option__default-content-icon {
    color: #ffffff;
  }

  .option__default-content-label {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .option__default-content-label--active {
    font-weight: bolder;
  }

  .option__default-content-icon {
    width: 16px;
    height: 16px;
    margin-left: 8px;
    color: color.$indigo-600;
  }
}

.option {
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

  &:hover {
    color: #ffffff;
    background: form.$background-color-active;
  }
}
</style>
