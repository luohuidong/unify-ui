import { onMounted, ref } from "vue";
import { faker } from "@faker-js/faker";

type Posts = {
  id: string;
  title: string;
  author: string;
  post: string;
}[];

export default function useFetchData() {
  const data: Posts = new Array(10).fill(0).map(() => ({
    id: faker.string.uuid(),
    title: faker.lorem.word(),
    author: faker.person.fullName(),
    post: faker.lorem.paragraph(),
    description: Math.random() > 0.7 ? faker.lorem.paragraph() : "",
  }));

  return {
    data,
  };
}
