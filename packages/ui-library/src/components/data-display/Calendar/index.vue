<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniDatePicker",
});
</script>

<script setup lang="ts">
import { useProvide } from "./composables";
import type { RootProps } from "./types";

import Header from "./Header.vue";
import Weeks from "./Weeks.vue";
import Days from "./Days.vue";

const props = defineProps<RootProps>();

const emit = defineEmits<{
  (e: "update:modelValue", value: Date): void;
}>();

useProvide(props, emit);
</script>

<template>
  <div :class="$style.calendar">
    <Header></Header>

    <div :class="$style.calendar__main">
      <Weeks></Weeks>
      <Days></Days>
    </div>
  </div>
</template>

<style lang="scss" module>
.calendar {
  width: 400px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.calendar__main {
  padding: 20px;
  padding-top: 0px;
}
</style>
