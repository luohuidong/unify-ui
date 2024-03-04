<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniFileDropZone",
});
</script>

<script setup lang="ts">
import { UniFilePicker } from "@/components";
import PhotoIcon from "./icons/PhotoIcon.vue";

const props = defineProps<{
  promptText?: string;
  multiple?: boolean;
}>();

const emits = defineEmits<{
  (e: "file-change", files: File[]): void;
}>();

defineSlots<{
  default?: (props: {}) => any;
}>();

function handleEmitFileChange(files: FileList) {
  const tmpFiles: File[] = [];

  for (let i = 0; i < files.length; i++) {
    tmpFiles.push(files[i]);
  }

  emits("file-change", props.multiple ? tmpFiles : [tmpFiles[0]]);
}

function handleFileChange(fileList: FileList) {
  if (fileList) {
    handleEmitFileChange(fileList);
  }
}

function handleDrop(e: DragEvent) {
  const files = e.dataTransfer?.files;
  if (files) {
    handleEmitFileChange(files);
  }
}
</script>

<template>
  <div :class="$style['drop-area']" @dragenter.stop.prevent @dragover.stop.prevent @drop.stop.prevent="handleDrop">
    <slot>
      <PhotoIcon :class="$style['icon']" />

      <div :class="$style['tips']">
        <span :class="$style['tips__first-line']">
          <UniFilePicker :multiple="multiple" @file-change="handleFileChange">
            <span :class="$style['file-picker-text']">Upload a file</span>
          </UniFilePicker>
          <span> or drag and drop</span>
        </span>

        <span :class="$style['tips__second-line']">{{ promptText }}</span>
      </div>
    </slot>
  </div>
</template>

<style lang="scss" module>
.drop-area {
  box-sizing: border-box;

  height: 190px;
  width: 670px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-width: 1px;
  border-style: dashed;
  border-color: rgb(17 24 39 / 0.25);
  border-radius: 8px;
}

.icon {
  height: 48px;
  width: 48px;
  color: rgb(209 213 219);
}

.tips {
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.tips__first-line {
  margin: 0px;
  color: rgb(75 85 99);
  line-height: 24px;
  font-size: 14px;
}

.file-picker-text {
  color: rgb(79 70 229);
  font-weight: 600;
}

.tips__second-line {
  margin: 0px;
  color: rgb(75 85 99);
  line-height: 20px;
  font-size: 12px;
}
</style>
