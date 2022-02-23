<script setup lang="ts">
import routes from "~pages";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.sidebar">
      <template v-for="item in routes" :key="item.path">
        <router-link
          v-if="item.path !== '/'"
          :to="item.path"
          :class="$style.link"
          :active-class="$style.active"
        >
          {{ item.name }}
        </router-link>
      </template>
    </div>

    <div :class="$style.main">
      <div :class="$style.header">
        <h1>{{ route.meta.title }}</h1>
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  justify-content: center;
}
</style>

<style lang="scss" module>
.container {
  width: 100%;
  display: flex;

  .sidebar {
    box-sizing: border-box;
    padding: 20px;
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgb(223, 219, 219);

    .link {
      margin: 10px 0;
      color: grey;

      &.active {
        color: rgb(92, 204, 142);
      }
    }
  }

  .main {
    box-sizing: border-box;
    padding: 20px;
    flex: 1;
    height: 100vh;

    .header {
      height: 100px;
    }
  }
}
</style>
