<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniForm",
});
</script>

<script setup lang="ts">
import Schema from "async-validator";
import type { Rules } from "async-validator";

import type { FormProps } from "./types";
import { useFormStoreProvider } from "./composables";

const props = defineProps<FormProps>();
const { state } = useFormStoreProvider(props);

const emits = defineEmits<{
  (e: "finish"): void;
  (e: "finishFailed"): void;
}>();

</script>

<template>
  <form>
    <slot></slot>
  </form>
</template>

<style lang="scss" module></style>
