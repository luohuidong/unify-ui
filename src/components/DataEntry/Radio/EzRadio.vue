<script setup lang="ts">
defineProps<{
  name: string;
  title: string;
  value: string | number;
}>();
</script>

<template>
  <label :class="$style.label">
    <input :class="$style.input" type="radio" :name="name" />
    <div :class="$style.checkmark"></div>
    {{ title }}
  </label>
</template>

<style lang="scss" module>
/* Customize the label (the container) */
.label {
  display: inline-flex;
  align-items: center;

  cursor: pointer;
  font-size: 14px;
  user-select: none;
}

/* Hide the browser's default radio button */
.input {
  display: none;
}

/* Create a custom radio button */
.checkmark {
  height: 16px;
  width: 16px;

  margin-right: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.label:hover .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a purple background */
.input:checked ~ .checkmark {
  background-color: #4f46e5;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  display: none;

  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
}

/* Show the indicator (dot/circle) when checked */
.input:checked ~ .checkmark:after {
  display: block;
}
</style>
