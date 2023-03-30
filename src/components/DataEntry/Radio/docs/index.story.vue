<script setup lang="ts">
import EzRadio from "../EzRadio.vue";
</script>

<template>
  <Story title="Data Entry/Radio">
    <Variant title="Normal use">
      <div class="container">
        <EzRadio name="radio" title="one" value="1"></EzRadio>
        <EzRadio name="radio" title="two" value="2"></EzRadio>
        <EzRadio name="radio" title="three" value="3"></EzRadio>
        <EzRadio name="radio" title="four" value="4"></EzRadio>
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
