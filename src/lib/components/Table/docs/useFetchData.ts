import { onMounted, ref } from "vue";

type Posts = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}[];

export default function useFetchData() {
  const data = ref<Posts>([]);

  onMounted(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        data.value = json;
      });
  });

  return {
    data,
  };
}
