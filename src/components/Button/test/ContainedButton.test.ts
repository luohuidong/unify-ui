import { render } from "@testing-library/vue";
import Button from "../index.vue";

test("it should work", () => {
  const { getByText } = render(Button, {
    props: {
      /* ... */
    },
  });

  // assert output
  getByText("...");
});
