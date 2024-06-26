<script setup lang="ts">
import { ref } from "vue";
import { UniEmpty, UniConfigProvider, UniButton } from "unify-ui";

const locale = ref<"en-US" | "zh-CN">("en-US");
</script>

<template>
  <UniButton @click="locale = 'en-US'">locale: en-US</UniButton>
  <UniButton @click="locale = 'zh-CN'">locale: zh-CN</UniButton>

  <UniConfigProvider :locale="locale">
    <UniEmpty></UniEmpty>
  </UniConfigProvider>
</template>
