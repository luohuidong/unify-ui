<script setup lang="ts">
import { Transition } from "vue";

import { EzButton, Scrim } from "@/components";

withDefaults(
  defineProps<{
    title?: string;
    supportingText: string;
    visible: boolean;
    confirmText?: string;
    cancelText?: string;
  }>(),
  {
    title: "",
    confirmText: "确定",
    cancelText: "取消",
  }
);

const emits = defineEmits(["click:confirm-button", "click:cancel-button"]);

function handleConfirmButtonClick() {
  emits("click:confirm-button");
}

function handleCancelButtonClick() {
  emits("click:cancel-button");
}
</script>

<template>
  <Transition
    :enter-active-class="$style['transition--enter-active']"
    :enter-from-class="$style['transition--enter-from']"
    :leave-active-class="$style['transition--leave-active']"
    :leave-to-class="$style['transition--leave-to']"
  >
    <Scrim v-show="visible">
      <div :class="$style.dialog">
        <div :class="$style.content">
          <div v-if="title" :class="$style.content__title">{{ title }}</div>
          <div :class="$style['content__support-tips']">{{ supportingText }}</div>
        </div>

        <div :class="$style.actions">
          <EzButton
            type="secondary"
            :class="$style['cancel-button']"
            @click="handleCancelButtonClick"
          >
            {{ cancelText }}
          </EzButton>
          <EzButton type="primary" @click="handleConfirmButtonClick">{{ confirmText }}</EzButton>
        </div>
      </div>
    </Scrim>
  </Transition>
</template>

<style lang="scss" module>
@use "sass:map";
@use "@/styles/color";
@use "@/styles/type";

.transition--enter-active,
.transition--leave-active {
  transition: opacity 0.5s ease;
}

.transition--enter-from,
.transition--leave-to {
  opacity: 0;
}

.dialog {
  width: 450px;
  max-height: 650px;

  display: flex;
  flex-direction: column;

  padding: 20px;
  padding-bottom: 8px;

  border-radius: 8px;
  background-color: color.$background;
}

.content {
  flex: 1;
}

.content__title {
  @include type.headline6;
  margin-bottom: 12px;
}

.content__support-tips {
  @include type.body1;
  color: map.get(color.$grey, "700");
}

.actions {
  margin-top: 28px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.cancel-button {
  margin-right: 8px;
}
</style>
