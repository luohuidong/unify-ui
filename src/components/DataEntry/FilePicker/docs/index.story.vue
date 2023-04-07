<script setup lang="ts">
import { ref } from "vue";

import FilePicker from "../index.vue";

const filesInfo = ref<{ name: string }[]>([]);

function fileChange(fileList: File[]) {
  filesInfo.value = fileList.map((item) => ({ name: item.name }));
}
</script>

<template>
  <Story title="Data Entry/FilePicker">
    <FilePicker @file-change="fileChange"></FilePicker>

    <p>File list:</p>
    <ul>
      <li v-for="item in filesInfo" :key="item.name">{{ item.name }}</li>
    </ul>
  </Story>
</template>

<style scoped></style>
