<script setup lang="ts"></script>

<template>
  <div :class="$style.container">
    <div>
      <router-link to="/button">Button</router-link>
      <router-link to="/dialog">Dialog</router-link>
    </div>
    <div :class="$style.main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  justify-content: center;
}
</style>

<style module>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
