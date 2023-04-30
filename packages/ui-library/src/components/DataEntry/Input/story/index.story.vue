<script setup lang="ts">
import { ref } from "vue";
import EzInput from "../index.vue";

const value = ref("allan@mail.com");
</script>

<template>
  <Story title="Data Entry/Input">
    <Variant title="Basic usage">
      <div class="container">
        <div>
          <EzInput v-model="value" />
        </div>
        <div>
          <EzInput placeholder="placeholder: you@email.com"></EzInput>
        </div>
        <div>
          <EzInput v-model="value" disabled></EzInput>
        </div>
        <div>
          <EzInput v-model="value" readonly></EzInput>
        </div>
      </div>
    </Variant>

    <Variant title="Add-on">
      <div class="container">
        <div>
          <EzInput>
            <template #leading-add-on>
              <span>http://</span>
            </template>
          </EzInput>
        </div>

        <div>
          <EzInput disabled>
            <template #leading-add-on>
              <span>http://</span>
            </template>
          </EzInput>
        </div>

        <div>
          <EzInput>
            <template #trailing-add-on>
              <span>.com</span>
            </template>
          </EzInput>
        </div>

        <div>
          <EzInput disabled>
            <template #trailing-add-on>
              <span>.com</span>
            </template>
          </EzInput>
        </div>

        <div>
          <EzInput>
            <template #leading-add-on>
              <span>http://</span>
            </template>

            <template #trailing-add-on>
              <span>.com</span>
            </template>
          </EzInput>
        </div>

        <div>
          <EzInput disabled>
            <template #leading-add-on>
              <span>http://</span>
            </template>

            <template #trailing-add-on>
              <span>.com</span>
            </template>
          </EzInput>
        </div>
      </div>
    </Variant>

    <Variant title="Inline add-on">
      <div class="container">
        <div>
          <EzInput>
            <template #inline-leading-add-on>
              <span>http://</span>
            </template>
          </EzInput>
        </div>

        <div>
          <EzInput disabled>
            <template #inline-leading-add-on>
              <span>http://</span>
            </template>
          </EzInput>
        </div>

        <div>
          <EzInput>
            <template #inline-trailing-add-on>
              <span>.com</span>
            </template>
          </EzInput>
        </div>

        <div>
          <EzInput disabled>
            <template #inline-trailing-add-on>
              <span>.com</span>
            </template>
          </EzInput>
        </div>

        <div>
          <EzInput>
            <template #inline-leading-add-on>
              <span>http://</span>
            </template>

            <template #inline-trailing-add-on>
              <span>.com</span>
            </template>
          </EzInput>
        </div>

        <div>
          <EzInput disabled>
            <template #inline-leading-add-on>
              <span>http://</span>
            </template>

            <template #inline-trailing-add-on>
              <span>.com</span>
            </template>
          </EzInput>
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
