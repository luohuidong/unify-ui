<script setup lang="ts">
import { ref } from "vue";
import { EzFileDropZone } from "unify-ui";

const filesInfo = ref<{ name: string }[]>([]);

function fileChange(fileList: File[]) {
  filesInfo.value = fileList.map((item) => ({ name: item.name }));
}
</script>

<template>
  <EzFileDropZone multiple @file-change="fileChange"> </EzFileDropZone>

  <p>File list:</p>
  <ul>
    <li v-for="item in filesInfo" :key="item.name">{{ item.name }}</li>
  </ul>
</template>

<style lang="scss" scoped></style>
