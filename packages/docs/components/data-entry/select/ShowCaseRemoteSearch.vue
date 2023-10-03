<script setup lang="ts">
import { ref, onMounted } from "vue";
import { UniSelect, UniSelectOption } from "unify-ui";

const value = ref();
const options = ref<{ label: string; value: string }[]>([]);
const loading = ref(false);

function handleFetchData() {
  interface PersonInfo {
    name: {
      title: string;
      first: string;
      last: string;
    };
    login: {
      uuid: string;
    };
  }

  loading.value = true;
  fetch("https://randomuser.me/api/?results=20&inc=name,login")
    .then((value) => value.json())
    .then(({ results }: { results: PersonInfo[] }) => {
      options.value = results.map((item) => ({
        label: `${item.name.first} ${item.name.last}`,
        value: item.login.uuid,
      }));
    })
    .finally(() => {
      loading.value = false;
    });
}

onMounted(() => {
  handleFetchData();
});
</script>

<template>
  <div>
    <UniSelect v-model="value" remote-search :loading="loading" @search="handleFetchData">
      <UniSelectOption
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></UniSelectOption>
    </UniSelect>
  </div>
</template>
