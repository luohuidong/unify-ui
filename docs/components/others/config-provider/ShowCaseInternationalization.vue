<script setup lang="ts">
import { ref } from "vue";
import { UniEmpty, UniConfigProvider, UniButton } from "unify-ui";

const locale = ref<"en" | "zh-CN">("en");
</script>

<template>
  <div>
    <UniButton @click="locale = 'en'">locale: en</UniButton>
    <UniButton @click="locale = 'zh-CN'">locale: zh-CN</UniButton>

    <UniConfigProvider :locale="locale">
      <UniEmpty></UniEmpty>
    </UniConfigProvider>
  </div>
</template>

<style lang="scss" scoped></style>
