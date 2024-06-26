<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniSelectTrigger",
});
</script>

<script setup lang="ts">
import { computed } from "vue";

import { useStore } from "./composables/useStore";
import SelectTriggerIcons from "./SelectTriggerIcons.vue";
import SelectTriggerInput from "./SelectTriggerInput.vue";
import SelectTriggerTags from "./SelectTriggerTags.vue";

const props = defineProps<{
  disabled?: boolean;
}>();

const { rootProps, actions, triggerRef, state } = useStore();

function handleTriggerClick() {
  if (props.disabled) return;

  triggerRef.value && (state.floatingElementWidth = triggerRef.value.offsetWidth || 250);
  actions.visibleChange();
}

const hiddenInput = computed(() => {
  if (
    rootProps.multiple &&
    rootProps.modelValue &&
    rootProps.modelValue instanceof Set &&
    rootProps.modelValue.size > 0
  ) {
    return true;
  }

  return false;
});
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
        [$style['trigger--focus']]: !disabled && !state.isErrorStatus,
        [$style['trigger--with-value']]: !disabled && rootProps.modelValue,
        [$style['trigger--disabled']]: disabled,
        [$style['trigger--error']]: state.isErrorStatus,
      },
    ]"
    @click="handleTriggerClick"
  >
    <template v-if="!hiddenInput">
      <select-trigger-input :disabled="disabled"></select-trigger-input>
    </template>
    <template v-else>
      <select-trigger-tags></select-trigger-tags>
    </template>

    <select-trigger-icons
      :arrow-icons-wrapper-class="$style['trigger__icon-arrow-wrapper']"
      :close-icon-class="$style['trigger__icon-close']"
    ></select-trigger-icons>
  </span>
</template>

<style lang="scss" module>
@use "@/styles/form";

.trigger {
  display: flex;
  align-items: center;

  position: relative;
  display: inline-block;
  min-height: form.$control-height;
  width: 250px;
  box-sizing: border-box;
  overflow: hidden;

  font-size: form.$font-size-sm;
  line-height: 24px;
  border: 1px solid rgb(229, 231, 235);
  background: rgb(255, 255, 255);
  border-radius: form.$radius;
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

.trigger--error {
  border: 1px solid form.$border-color-error;
}
.trigger--error:focus-within {
  border: 1px solid form.$border-color-error;
  outline: 1px solid form.$outline-color-error;
}
</style>
