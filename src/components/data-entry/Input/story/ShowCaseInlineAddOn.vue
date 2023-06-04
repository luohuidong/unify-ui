<script setup lang="ts">
import UniInput from "../index.vue";
</script>

<template>
  <div class="container">
    <div>
      <UniInput>
        <template #inline-leading-add-on>
          <span>http://</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput disabled>
        <template #inline-leading-add-on>
          <span>http://</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput>
        <template #inline-trailing-add-on>
          <span>.com</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput disabled>
        <template #inline-trailing-add-on>
          <span>.com</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput>
        <template #inline-leading-add-on>
          <span>http://</span>
        </template>

        <template #inline-trailing-add-on>
          <span>.com</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput disabled>
        <template #inline-leading-add-on>
          <span>http://</span>
        </template>

        <template #inline-trailing-add-on>
          <span>.com</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput status="error" placeholder="error">
        <template #inline-leading-add-on>
          <span>http://</span>
        </template>

        <template #inline-trailing-add-on>
          <span>.com</span>
        </template>
      </UniInput>
    </div>

    <div>
      <UniInput disabled status="error" placeholder="error & disabled">
        <template #inline-leading-add-on>
          <span>http://</span>
        </template>

        <template #inline-trailing-add-on>
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
