<script setup lang="ts">
import UniRadio from "../UniRadio.vue";
</script>

<template>
  <Story title="Data Entry/Radio">
    <Variant title="Normal use">
      <div class="container">
        <div>
          <UniRadio name="radio" title="one" value="1"></UniRadio>
        </div>

        <div>
          <UniRadio name="radio" title="two" value="2"></UniRadio>
        </div>

        <div>
          <UniRadio name="radio" title="three" value="3"></UniRadio>
        </div>

        <div>
          <UniRadio name="radio" title="four" value="4"></UniRadio>
        </div>
      </div>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 10px;
}
</style>
