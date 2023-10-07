<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniSelectTrigger",
});
</script>

<script setup lang="ts">
import { ArrowLeft as ArrowIcon, CloseOutline as CloseIcon } from "@/icons";
import { useStore } from "./composables/useStore";
import SelectTriggerIcons from "./SelectTriggerIcons.vue";

const props = defineProps<{
  disabled?: boolean;
}>();

const { rootProps, actions, triggerRef, state } = useStore();

function handleTriggerClick() {
  if (props.disabled) return;

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
    :class="[
      $style['trigger'],
      {
        [$style['trigger--focus']]: !disabled,
        [$style['trigger--with-value']]: !disabled && rootProps.modelValue,
        [$style['trigger--disabled']]: disabled,
      },
    ]"
    @click="handleTriggerClick"
  >
    <select-trigger-icons
      :arrow-icons-wrapper-class="$style['trigger__icon-arrow-wrapper']"
      :close-icon-class="$style['trigger__icon-close']"
    ></select-trigger-icons>
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
}

.trigger--focus:focus-within {
  border: 1px solid form.$border-color-active;
  outline: 1px solid form.$outline-color-active;
}

.trigger--with-value:hover {
  .trigger__icon-arrow-wrapper {
    display: none;
  }
  .trigger__icon-close {
    display: block;
  }
}

.trigger--disabled {
  cursor: not-allowed;
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

.trigger__input--disabled {
  cursor: not-allowed;
  background-color: form.$background-color-disabled;
}
</style>
