<script setup lang="ts">
import { ref } from "vue";

import EzFileDropZone from "../index.vue";

const filesInfo = ref<{ name: string }[]>([]);

function fileChange(fileList: File[]) {
  filesInfo.value = fileList.map((item) => ({ name: item.name }));
}
</script>

<template>
  <Story title="Data Entry/FileDropZone">
    <Variant title="Basic Usage">
      <EzFileDropZone
        prompt-text="PNG, JPG, GIF up to 10MB"
        @file-change="fileChange"
      ></EzFileDropZone>

      <p>File list:</p>
      <ul>
        <li v-for="item in filesInfo" :key="item.name">{{ item.name }}</li>
      </ul>
    </Variant>

    <Variant title="Customized Content">
      <EzFileDropZone prompt-text="PNG, JPG, GIF up to 10MB" @file-change="fileChange">
        Customize Content
      </EzFileDropZone>

      <p>File list:</p>
      <ul>
        <li v-for="item in filesInfo" :key="item.name">{{ item.name }}</li>
      </ul>
    </Variant>

    <Variant title="Multiple Files">
      <EzFileDropZone multiple @file-change="fileChange"> </EzFileDropZone>

      <p>File list:</p>
      <ul>
        <li v-for="item in filesInfo" :key="item.name">{{ item.name }}</li>
      </ul>
    </Variant>
  </Story>
</template>

<style scoped></style>
