<script setup lang="ts">
import UniInput from "../index.vue";
</script>

<template>
  <div class="container">
    <div>
      <UniInput>
        <template #leading-add-on>
          <span>http://</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput disabled>
        <template #leading-add-on>
          <span>http://</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput>
        <template #trailing-add-on>
          <span>.com</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput disabled>
        <template #trailing-add-on>
          <span>.com</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput>
        <template #leading-add-on>
          <span>http://</span>
        </template>

        <template #trailing-add-on>
          <span>.com</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput disabled>
        <template #leading-add-on>
          <span>http://</span>
        </template>

        <template #trailing-add-on>
          <span>.com</span>
        </template>
      </UniInput>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 500px;
  padding: 20px;
}

.container > div {
  padding: 20px;
}
</style>
