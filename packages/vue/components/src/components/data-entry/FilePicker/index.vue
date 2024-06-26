<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilePicker",
});
</script>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  multiple?: boolean;
}>();

const emits = defineEmits<{
  (e: "file-change", files: FileList): void;
}>();

const inputRef = ref();

function handleClick() {
  inputRef.value?.click();
}

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement;

  const files = input.files;
  if (files) emits("file-change", files);

  input.value = "";
}
</script>

<template>
  <div :class="$style['file-picker']" @click="handleClick">
    <slot></slot>
    <input
      ref="inputRef"
      :class="$style['file-picker__input']"
      type="file"
      :multiple="multiple"
      @change="handleFileChange"
    />
  </div>
</template>

<style lang="scss" module>
.file-picker {
  display: inline-block;
  cursor: pointer;
}

.file-picker__input {
  display: none;
}
</style>
