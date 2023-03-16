import { render, fireEvent } from "@testing-library/vue";
import Button from "../index.vue";

test("it should work", async () => {
  const { getByText } = render(Button, {
    props: {
      type: "contained",
      text: "test button",
    },
  });

  // assert output
  const button = getByText("test button");

  await fireEvent.click(button);
});
