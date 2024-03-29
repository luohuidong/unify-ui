<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniSwitch",
});
</script>

<script setup lang="ts">
defineProps<{
  modelValue?: boolean;
  disabled?: boolean;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "change", value: boolean): void;
}>();

function handleInput(event: Event) {
  const checked = (event.target as HTMLInputElement).checked;
  emits("update:modelValue", checked);
}

function handleChange(event: Event) {
  const checked = (event.target as HTMLInputElement).checked;
  emits("change", checked);
}
</script>

<template>
  <label :class="$style['switch']">
    <input
      type="checkbox"
      :class="$style['switch__checkbox']"
      :checked="modelValue"
      :disabled="disabled"
      @input="handleInput"
      @change="handleChange"
    />
    <span
      :class="[
        $style['switch__slider'],
        $style['switch__slider--rounded'],
        { [$style['switch__slider--disabled']]: disabled },
      ]"
    ></span>
  </label>
</template>

<style lang="scss" module>
/* The switch - the box around the slider */
.switch {
  display: inline-block;
}

.switch__checkbox {
  appearance: none;
}

/* The slider */
.switch__slider {
  box-sizing: content-box;

  --default-color: rgb(229 231 235);

  display: inline-block;
  width: 40px;
  height: 20px;

  border-width: 2px;
  border-style: solid;
  border-color: var(--default-color);
  background-color: var(--default-color);
  transition: 0.4s;
  cursor: pointer;
}

.switch__slider--rounded {
  border-radius: 20px;
}

.switch__slider--disabled {
  cursor: not-allowed;
}

.switch__slider:before {
  content: "";

  position: absolute;
  height: 20px;
  width: 20px;

  border-radius: 50%;
  background-color: white;
  transition: 0.4s;
}

.switch__checkbox:checked + .switch__slider {
  --active-color: rgb(79 70 229);

  border-color: var(--active-color);
  background-color: var(--active-color);
}

.switch__checkbox:checked + .switch__slider:before {
  transform: translateX(20px);
}

.switch__checkbox:checked + .switch__slider--disabled {
  --active-color: rgb(196 181 253);

  border-color: var(--active-color);
  background-color: var(--active-color);
}
</style>
