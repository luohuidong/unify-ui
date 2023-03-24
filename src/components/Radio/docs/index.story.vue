<script setup lang="ts">
import EzRadio from "../EzRadio.vue";
</script>

<template>
  <Story title="Data Entry/Radio">
    <Variant title="Normal use">
      <div class="container">
        <EzRadio name="radio" title="one"></EzRadio>
        <EzRadio name="radio" title="two"></EzRadio>
        <EzRadio name="radio" title="three"></EzRadio>
        <EzRadio name="radio" title="four"></EzRadio>
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
