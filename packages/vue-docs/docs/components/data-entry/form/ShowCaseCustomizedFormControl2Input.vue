<script setup lang="ts">
import { useGetFormItemValidateStatus } from "unify-ui";
const validateStatus = useGetFormItemValidateStatus();
</script>

<template>
  <input v-bind="$attrs" class="input" :class="{ 'input--error': validateStatus === 'error' }" />
</template>

<style scoped>
.input {
  border: 1px solid black;
}

.input--error {
  border: 1px solid red;
}
</style>
