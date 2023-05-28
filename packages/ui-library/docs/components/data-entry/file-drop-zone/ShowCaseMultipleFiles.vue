<script setup lang="ts">
import { ref } from "vue";
import { UniFileDropZone } from "unify-ui";

const filesInfo = ref<{ name: string }[]>([]);

function fileChange(fileList: File[]) {
  filesInfo.value = fileList.map((item) => ({ name: item.name }));
}
</script>

<template>
  <div>
    <UniFileDropZone multiple @file-change="fileChange"> </UniFileDropZone>

    <p>File list:</p>
    <ul>
      <li v-for="item in filesInfo" :key="item.name">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
