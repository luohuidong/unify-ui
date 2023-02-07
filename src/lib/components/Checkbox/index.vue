<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SCheckbox",
});
</script>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <label :class="$style.container">
    <input :class="$style.input" type="checkbox" checked />
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
  cursor: pointer;
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

// On mouse-over, add a grey background color
.container:hover {
  > .input:not(:checked) ~ .checkmark {
    background-color: #ccc;
  }

  > .input:checked ~ .checkmark {
    background-color: #0261cc;
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
</style>
