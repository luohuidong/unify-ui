<script setup lang="ts">
import { UniFileDropZone } from "unify-ui";
import { ref } from "vue";

const filesInfo = ref<{ name: string }[]>([]);

function fileChange(fileList: File[]) {
  filesInfo.value = fileList.map((item) => ({ name: item.name }));
}
</script>

<template>
  <UniFileDropZone prompt-text="PNG, JPG, GIF up to 10MB" @file-change="fileChange"></UniFileDropZone>

  <p>File list:</p>
  <ul>
    <li v-for="item in filesInfo" :key="item.name">{{ item.name }}</li>
  </ul>
</template>
