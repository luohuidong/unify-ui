import { render, html } from "lit";
import { setupHooks, getContainerEl } from "@cypress/mount-utils";

Cypress.on("run:start", () => {
  // Consider doing a check to ensure your adapter only runs in Component Testing mode.
  if (Cypress.testingType !== "component") {
    return;
  }

  Cypress.on("test:before:run", () => {
    // Do some cleanup from previous test - for example, clear the DOM.
    getContainerEl().innerHTML = "";
  });
});

export function mount(template: ReturnType<typeof html>): Cypress.Chainable {
  const root = getContainerEl();
  render(template, root);

  // Return a `Cypress.Chainable` that returns whatever is idiomatic
  // in the framework your mount adapter targets.
  return cy.wrap(root, { log: false });
}

// Setup Cypress lifecycle hooks.
setupHooks();
