<script setup lang="ts">
import { ref } from "vue";
import UniInput from "../index.vue";

const value = ref("allan@mail.com");
</script>

<template>
  <Story title="Data Entry/Input">
    <Variant title="Basic usage">
      <div class="container">
        <div>
          <UniInput v-model="value" />
        </div>
        <div>
          <UniInput placeholder="placeholder: you@email.com"></UniInput>
        </div>
        <div>
          <UniInput v-model="value" disabled></UniInput>
        </div>
        <div>
          <UniInput v-model="value" readonly></UniInput>
        </div>
      </div>
    </Variant>

    <Variant title="Add-on">
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
    </Variant>

    <Variant title="Inline add-on">
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
      </div>
    </Variant>
  </Story>
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
