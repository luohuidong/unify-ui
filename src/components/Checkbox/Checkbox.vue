<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EzCheckbox",
});
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    label: string;
    modelValue: boolean;
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", checked: boolean): void;
  (e: "change", checked: boolean): void;
}>();

function handleChange(e: Event) {
  const checked = (e.target as HTMLInputElement).checked;
  if (props.disabled === false) {
    emit("update:modelValue", checked);
    emit("change", checked);
  }
}

const cursor = computed(() => (props.disabled ? "not-allowed" : "pointer"));
</script>

<template>
  <label :class="$style.container">
    <input
      :class="$style.input"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="handleChange"
    />
    <span :class="$style.checkmark"></span>
    {{ label }}
  </label>
</template>

<style lang="scss" module>
.container {
  height: 26px;
  display: inline-flex;
  align-items: center;
  margin-right: 30px;
  cursor: v-bind(cursor);
  font-size: 14px;
  user-select: none;
}

.input {
  display: none;
}

// custom checkbox
.checkmark {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14px;
  width: 14px;
  margin-right: 8px;
  background-color: #eee;
  border-radius: 2px;
}

// When the checkbox is checked, add a blue background
.input:checked ~ .checkmark {
  background-color: #037aff;
}

// When the checkbox is disabled, add grey background color
.input:disabled ~ .checkmark {
  cursor: not-allowed;
  background-color: #f4f4f4;
}

// On mouse-over, add a background color
.container:hover > .input:not(:disabled) {
  // When the checkbox is checked, add a blue background
  &:checked ~ .checkmark {
    background-color: #0261cc;
  }

  // When the checkbox is not checked, add a grey background
  &:not(:checked) ~ .checkmark {
    background-color: #ccc;
  }
}

/* Create the checkmark/indicator (hidden when not checked) */
.container > .checkmark::after {
  opacity: 0;
  content: "";
  width: 2px;
  height: 6px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Show the checkmark when checked */
.container > input:checked ~ .checkmark::after {
  opacity: 1;
}
.container > input:checked:disabled ~ .checkmark::after {
  opacity: 1;
  border-color: #dcdcdc;
}
</style>
