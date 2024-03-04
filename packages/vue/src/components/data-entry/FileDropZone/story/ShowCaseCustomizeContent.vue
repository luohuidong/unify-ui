<script setup lang="ts">
import { ref } from "vue";

import UniFileDropZone from "../index.vue";

const filesInfo = ref<{ name: string }[]>([]);

function fileChange(fileList: File[]) {
  filesInfo.value = fileList.map((item) => ({ name: item.name }));
}
</script>

<template>
  <UniFileDropZone prompt-text="PNG, JPG, GIF up to 10MB" @file-change="fileChange">
    Customize Content
  </UniFileDropZone>

  <p>File list:</p>
  <ul>
    <li v-for="item in filesInfo" :key="item.name">{{ item.name }}</li>
  </ul>
</template>
