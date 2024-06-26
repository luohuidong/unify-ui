import { html } from "lit";
import "./index.js";

describe("u-button basic usage", () => {
  it("mounts", () => {
    cy.mount(html`<u-button>Click</u-button>`)
      .get("u-button")
      .should("contains.text", "Click");
  });
});
