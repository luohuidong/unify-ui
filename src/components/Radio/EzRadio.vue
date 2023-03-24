<script setup lang="ts">
defineProps<{
  name: string;
  title: string;
}>();
</script>

<template>
  <label class="label">
    <input type="radio" checked :name="name" />
    <div class="checkmark"></div>
    {{ title }}
  </label>
</template>

<style lang="scss" scoped>
/* Customize the label (the container) */
.label {
  display: inline-flex;
  align-items: center;

  cursor: pointer;
  font-size: 14px;
  user-select: none;
}

/* Hide the browser's default radio button */
.label input {
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
.label:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.label input:checked ~ .checkmark {
  background-color: #4f46e5;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.label input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.label .checkmark:after {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
}
</style>
