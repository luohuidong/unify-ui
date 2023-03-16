<script setup lang="ts">
import { Transition } from "vue";

import { EzButton } from "@/components";
import Scrim from "../Scrim.vue";

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
    :enter-active-class="$style.enterActive"
    :enter-from-class="$style.enterFrom"
    :leave-active-class="$style.leaveActive"
    :leave-to-class="$style.leaveTo"
  >
    <Scrim v-show="visible">
      <div :class="$style.container">
        <div :class="$style.textContainer">
          <div v-if="title" :class="$style.title">{{ title }}</div>
          <div :class="$style.supportText">{{ supportingText }}</div>
        </div>

        <div :class="$style.buttonContainer">
          <EzButton type="text" @click="handleCancelButtonClick"> {{ cancelText }}</EzButton>
          <EzButton type="text" @click="handleConfirmButtonClick">{{ confirmText }}</EzButton>
        </div>
      </div>
    </Scrim>
  </Transition>
</template>

<style lang="scss" module>
@use "sass:map";
@use "@/styles/color";
@use "@/styles/type";

.enterActive,
.leaveActive {
  transition: opacity 0.5s ease;
}

.enterFrom,
.leaveTo {
  opacity: 0;
}

.container {
  width: 450px;
  max-height: 650px;

  display: flex;
  flex-direction: column;

  padding: 20px;
  padding-bottom: 8px;

  border-radius: 8px;
  background-color: color.$background;
}

.textContainer {
  flex: 1;

  .title {
    @include type.headline6;
    margin-bottom: 12px;
  }

  .supportText {
    @include type.body1;
    color: map.get(color.$grey, "700");
  }
}

.buttonContainer {
  margin-top: 28px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
