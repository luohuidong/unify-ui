<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniSelectTrigger",
});
</script>

<script setup lang="ts">
import { ArrowLeft as ArrowIcon, Close as CloseIcon } from "@/icons";
import { useStore } from "./composables/useStore";

const { rootProps, actions, triggerRef, state } = useStore();

function handleTriggerClick() {
  triggerRef.value && (state.floatingElementWidth = triggerRef.value.offsetWidth || 250);
  actions.visibleChange();
}
</script>

<template>
  <span
    :ref="
      (e) => {
        triggerRef = e as HTMLSpanElement;
      }
    "
    :class="{ [$style['trigger']]: true, [$style['trigger--with-value']]: rootProps.modelValue }"
    @click="handleTriggerClick"
  >
    <input
      :class="$style['trigger__input']"
      :placeholder="rootProps.placeholder"
      readonly
      :value="rootProps.modelValue && state.valueLabelMap.get(rootProps.modelValue)"
    />

    <span :class="$style['trigger__icons']">
      <span :class="$style['trigger__icon-arrow-wrapper']">
        <arrow-icon :class="[$style['trigger__icon-arrow'], $style['select__icon-arrow--up']]"></arrow-icon>
        <arrow-icon :class="[$style['trigger__icon-arrow'], $style['select__icon-arrow--down']]"></arrow-icon>
      </span>
      <close-icon :class="$style['trigger__icon-close']" @click.stop="actions.handleClear"></close-icon>
    </span>
  </span>
</template>

<style lang="scss" module>
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
      width: 12px;
      height: 12px;

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
</style>
