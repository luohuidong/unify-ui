<script setup lang="ts">
import { useI18n } from "unify-ui/composables/useI18n";

import UniButton from "../../general/Button/index.vue";
import UniScrim from "../../others/Scrim/index.vue";
import CloseIcon from "./IconClose.vue";

const { t } = useI18n();

defineProps<{
  visible: boolean;
  title?: string;
  supportingText?: string;
  confirmText?: string;
  cancelText?: string;
  modalClass?: string;
}>();

const emits = defineEmits<{
  (e: "click:confirm-button"): void;
  (e: "click:cancel-button"): void;
}>();

function handleConfirmButtonClick() {
  emits("click:confirm-button");
}

function handleCancelButtonClick() {
  emits("click:cancel-button");
}
</script>

<template>
  <UniScrim v-show="visible">
    <div class="modal" :class="modalClass">
      <CloseIcon class="modal__close-icon" @click="handleCancelButtonClick"></CloseIcon>

      <slot name="title">
        <div v-if="title" class="modal__title">{{ title }}</div>
      </slot>

      <div class="content">
        <slot>
          <div v-if="supportingText" class="content__support-tips">{{ supportingText }}</div>
        </slot>
      </div>

      <div class="actions">
        <slot name="actions">
          <UniButton type="secondary" class="cancel-button" @click="handleCancelButtonClick">
            {{ cancelText || t("modal.cancel") }}
          </UniButton>

          <UniButton type="primary" @click="handleConfirmButtonClick">
            {{ confirmText || t("modal.confirm") }}
          </UniButton>
        </slot>
      </div>
    </div>
  </UniScrim>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "unify-ui/styles/color";
@use "unify-ui/styles/type";

.modal {
  position: relative;

  width: 450px;
  max-height: 650px;

  display: flex;
  flex-direction: column;

  padding: 24px;

  border-radius: 8px;
  background-color: color.$background;
}

.modal__close-icon {
  position: absolute;
  right: 16px;
  top: 16px;

  width: 24px;
  height: 24px;

  color: rgb(156 163 175);
  cursor: pointer;

  &:hover {
    color: rgb(107 114 128);
  }
}

.modal__title {
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: rgb(17, 24, 39);
  margin-bottom: 12px;
}

.content {
  flex: 1;
}

.content__support-tips {
  font-size: 14px;
  line-height: 20px;
  color: rgb(107, 114, 128);
}

.actions {
  margin-top: 16px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.cancel-button {
  margin-right: 8px;
}
</style>
