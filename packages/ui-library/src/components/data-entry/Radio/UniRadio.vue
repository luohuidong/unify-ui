<script setup lang="ts">
defineProps<{
  name: string;
  title: string;
  value: string | number;
}>();
</script>

<template>
  <label class="label">
    <input class="input" type="radio" :name="name" />
    <div class="checkmark"></div>
    <span class="text">{{ title }}</span>
  </label>
</template>

<style lang="scss" scoped>
/* Customize the label (the container) */
.label {
  display: inline-flex;
  align-items: center;

  cursor: pointer;
  user-select: none;
}

/* Hide the browser's default radio button */
.input {
  display: none;
}

/* Create a custom radio button */
.checkmark {
  position: relative;
  height: 16px;
  width: 16px;
  margin-right: 5px;

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

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 6px;
  height: 6px;

  display: none;
  border-radius: 50%;
  background: white;
}

/* Show the indicator (dot/circle) when checked */
.input:checked ~ .checkmark:after {
  display: block;
}

.text {
  font-size: 14px;
  line-height: 20px;
}
</style>
