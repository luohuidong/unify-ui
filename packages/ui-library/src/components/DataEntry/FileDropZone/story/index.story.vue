<script setup lang="ts">
import { ref } from "vue";

import FilePicker from "../index.vue";

const filesInfo = ref<{ name: string }[]>([]);

function fileChange(fileList: File[]) {
  filesInfo.value = fileList.map((item) => ({ name: item.name }));
}
</script>

<template>
  <Story title="Data Entry/FileDropZone">
    <Variant title="Basic Usage">
      <FilePicker prompt-text="PNG, JPG, GIF up to 10MB" @file-change="fileChange"></FilePicker>

      <p>File list:</p>
      <ul>
        <li v-for="item in filesInfo" :key="item.name">{{ item.name }}</li>
      </ul>
    </Variant>

    <Variant title="Customize Content">
      <FilePicker prompt-text="PNG, JPG, GIF up to 10MB" @file-change="fileChange">
        Customize Content
      </FilePicker>

      <p>File list:</p>
      <ul>
        <li v-for="item in filesInfo" :key="item.name">{{ item.name }}</li>
      </ul>
    </Variant>

    <Variant title="Multiple Files">
      <FilePicker multiple @file-change="fileChange"> </FilePicker>

      <p>File list:</p>
      <ul>
        <li v-for="item in filesInfo" :key="item.name">{{ item.name }}</li>
      </ul>
    </Variant>
  </Story>
</template>

<style scoped></style>
