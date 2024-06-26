<script setup lang="ts">
import { ref } from "vue";
import { UniButton, UniToolTip, UniRadioGroup } from "unify-ui";

const options = [
  { label: "Top", value: "top" },
  { label: "Bottom", value: "bottom" },
  { label: "Left", value: "left" },
  { label: "Right", value: "right" },
];
const placement = ref<InstanceType<typeof UniToolTip>["$props"]["placement"]>("top");
</script>

<template>
  <div class="container">
    <span>
      placement:
      <UniRadioGroup v-model="placement" :options="options" name="radio-placement" inline />
    </span>

    <div class="show-case">
      <UniToolTip title="Tooltip text" :placement="placement">
        <UniButton type="soft">Hover over me!</UniButton>
      </UniToolTip>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.show-case {
  display: flex;
  align-items: center;
  height: 100px;
}
</style>
