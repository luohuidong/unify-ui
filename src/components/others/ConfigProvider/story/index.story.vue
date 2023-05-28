<script setup lang="ts">
import { ref } from "vue";
import { UniEmpty, UniConfigProvider, UniButton } from "unify-ui";

const locale = ref<"en" | "zh-CN">("en");
</script>

<template>
  <Story title="Others/ConfigProvider">
    <Variant title="Internationalization">
      <UniButton @click="locale = 'en'">locale: en</UniButton>
      <UniButton @click="locale = 'zh-CN'">locale: zh-CN</UniButton>

      <UniConfigProvider :locale="locale">
        <UniEmpty></UniEmpty>
      </UniConfigProvider>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped></style>
