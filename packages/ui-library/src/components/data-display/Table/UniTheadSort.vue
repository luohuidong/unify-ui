<script setup lang="ts">
import { computed } from "vue";

import TriangleUp from "./icons/TriangleUp.vue";
import TriangleDown from "./icons/TriangleDown.vue";
import { ColumnData } from "./types";
import { useInject, useSortEmit } from "./composable";

const props = defineProps<{
  columnData: ColumnData;
}>();

const sortType = computed(() => {
  return props.columnData.sortType || ["ascending", "descending"];
});

const { tableProps } = useInject();
const { handleSortEmit } = useSortEmit();
</script>

<template>
  <div class="sort-container">
    <div class="toggle">
      <TriangleUp
        v-if="sortType.includes('ascending')"
        class="toggle-icon"
        :class="{
          'toggle-icon--active':
            tableProps.sort?.columnKey === columnData.key && tableProps.sort.order === 'ascending',
        }"
        @click.stop="handleSortEmit({ columnKey: columnData.key, order: 'ascending' })"
      ></TriangleUp>
    </div>

    <div class="toggle">
      <TriangleDown
        v-if="sortType.includes('descending')"
        class="toggle-icon"
        :class="{
          'toggle-icon--active':
            tableProps.sort?.columnKey === columnData.key && tableProps.sort.order === 'descending',
        }"
        @click.stop="handleSortEmit({ columnKey: columnData.key, order: 'descending' })"
      ></TriangleDown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
%child-position-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sort-container {
  @extend %child-position-center;
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  gap: 2px;
}

.toggle {
  @extend %child-position-center;
  height: 8px;
  width: 8px;
}

.toggle-icon {
  height: 100%;
  width: 100%;
  color: #999999;
  cursor: pointer;
}

.toggle-icon--active {
  color: #1677ff;
}
</style>
