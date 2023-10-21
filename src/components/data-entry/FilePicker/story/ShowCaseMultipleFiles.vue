<script setup lang="ts">
import { ref } from "vue";
import { UniButton } from "@/components";

import UniFilePicker from "../index.vue";

type FileInfos = { name: string }[];
const fileInfos = ref<FileInfos>([]);

function fileChange(fileList: FileList) {
  const tmpFiles: FileInfos = [];
  for (let file of fileList) {
    tmpFiles.push({ name: file.name });
  }
  fileInfos.value = tmpFiles;
}
</script>

<template>
  <UniFilePicker multiple @file-change="fileChange">
    <UniButton> Select Multiple Files </UniButton>
  </UniFilePicker>

  <p>File List:</p>
  <ul>
    <li v-for="file in fileInfos" :key="file.name">{{ file.name }}</li>
  </ul>
</template>

<style lang="scss" module></style>
