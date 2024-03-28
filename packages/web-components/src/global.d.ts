import { html } from "lit";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: (template: ReturnType<typeof html>) => Cypress.Chainable;
    }
  }
}
