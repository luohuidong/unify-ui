<script setup lang="ts">
import EzTable from "../index.vue";

const columns: InstanceType<typeof EzTable>["$props"]["columns"] = [
  {
    title: "标识",
    key: "id",
  },
  {
    title: "用户标识",
    key: "userId",
  },
  {
    title: "标题",
    key: "title",
  },
  {
    title: "是否完成",
    key: "completed",
  },
];
</script>

<template>
  <div :style="{ marginBottom: '50px' }">
    <EzTable row-key="id" :columns="columns" :data="[]"> </EzTable>
  </div>

  <div>
    <EzTable row-key="id" :columns="columns" :data="[]">
      <template #empty>
        <div class="placeholder">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M256 16C123.452 16 16 123.452 16 256s107.452 240 240 240s240-107.452 240-240S388.548 16 256 16Zm147.078 387.078a207.253 207.253 0 1 1 44.589-66.125a207.332 207.332 0 0 1-44.589 66.125Z"
            />
            <path
              fill="currentColor"
              d="M168 320h176v32H168zm42.63-91.958l-24.042-21.371l21.37-24.041l-23.916-21.26l-21.371 24.042l-24.041-21.37l-21.26 23.916l24.042 21.371l-21.37 24.041l23.916 21.26l21.371-24.042l24.041 21.37l21.26-23.916zm173.328-45.412l-23.916-21.26l-21.371 24.042l-24.041-21.37l-21.26 23.916l24.042 21.371l-21.37 24.041l23.916 21.26l21.371-24.042l24.041 21.37l21.26-23.916l-24.042-21.371l21.37-24.041z"
            />
          </svg>

          <span>No Data</span>
        </div>
      </template>
    </EzTable>
  </div>
</template>

<style scoped>
.placeholder {
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
}
</style>
