<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniDatePicker",
});
</script>

<script setup lang="ts">
import { ref } from "vue";
import dayjs from "dayjs";

import { UniCalendar, UniInput, UniPopup } from "@/index";

defineProps<{
  modelValue: Date | undefined;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: Date): void;
}>();

const popupRef = ref<InstanceType<typeof UniPopup>>();
const inputValue = ref();

function handleSelect(date: Date) {
  emits("update:modelValue", date);
  inputValue.value = dayjs(date).format("YYYY-MM-DD");
  popupRef.value?.hidePopup();
}
</script>

<template>
  <UniPopup ref="popupRef" placement="bottom" trigger="click">
    <UniInput v-model="inputValue" readonly></UniInput>

    <template #content>
      <div>
        <UniCalendar :model-value="modelValue" @select="handleSelect"></UniCalendar>
      </div>
    </template>
  </UniPopup>
</template>

<style lang="scss" module></style>
