<script setup lang="ts">
import { ref } from "vue";
import { UniButton, UniToolTip, UniRadioGroup } from "unify-ui";

const options = [
  { label: "disabled: false", value: "false" },
  { label: "disabled: true", value: "true" },
];

const radioValue = ref("false");
</script>

<template>
  <div>
    <div class="radio-group">
      <UniRadioGroup v-model="radioValue" name="tooltip-disabled-value" :options="options" inline />
    </div>

    <div class="show-case">
      <UniToolTip title="text" placement="top" :disabled="radioValue === 'true'">
        <UniButton>Hover over me!</UniButton>
      </UniToolTip>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.radio-group {
  margin-bottom: 20px;
}

.show-case {
  display: flex;
  align-items: center;
  height: 100px;
}
</style>
