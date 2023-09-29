<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniSelectionOptionFallbackContent",
});
</script>

<script setup lang="ts">
import { Tick as TickIcon } from "@/icons";

defineProps<{
  label: string;
  disabled?: boolean;
  isActive?: boolean;
}>();
</script>

<template>
  <div :class="[$style['content'], { [$style['content--hover']]: !disabled }]">
    <span
      :class="[
        $style['content__label'],
        {
          [$style['content__label--active']]: !disabled && isActive,
          [$style['content__label--disabled']]: disabled,
        },
      ]"
    >
      {{ label }}
    </span>

    <tick-icon
      v-if="isActive"
      :class="[$style['content__icon'], { [$style['content__icon--disabled']]: disabled }]"
    ></tick-icon>
  </div>
</template>

<style lang="scss" module>
@use "@/styles/color";
@use "@/styles/form";

.content {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content--hover:hover .content__icon {
  color: #ffffff;
}

.content__label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.content__label--active {
  font-weight: bolder;
}

.content__label--disabled {
  color: form.$font-color-disabled;
}

.content__icon {
  width: 16px;
  height: 16px;
  margin-left: 8px;
  color: color.$indigo-600;
}

.content__icon--disabled {
  color: form.$font-color-disabled;
}
</style>
