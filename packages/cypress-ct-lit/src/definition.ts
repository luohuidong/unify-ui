import { defineComponentFramework } from "cypress";

const litDep: Cypress.CypressComponentDependency = {
  // Unique, semantic identifier.
  type: "lit",

  // Human readable name.
  name: "Lit",

  // Package name install from `npm`.
  package: "lit",

  /**
   * Similar to package, but can include a version or tag.
   * Used during setup to generate an install command for users.
   * Eg: `lit@next`
   */
  installer: "lit@^3.0.0",

  // Human readable description.
  description: "Lit is a simple library for building fast, lightweight web components.",

  // Minimum supported version.
  minVersion: "^3.0.0",
};

/**
 * The definition.
 */
export default defineComponentFramework({
  /**
   * This should match the `npm` package name.
   * The convention required to ensure your Definition is processed
   * by Cypress is `cypress-ct-*` for global packages, or
   * `@org/cypress-ct-*` for organization level packages.
   */
  type: "@unify-ui/cypress-ct-lit",

  /**
   * The label that shows up when configuring Component Testing
   * for the first time.
   */
  name: "Lit",

  /**
   * Supported bundlers. Can be "webpack" and/or "vite".
   */
  supportedBundlers: ["vite"],

  /**
   * Used by Cypress to automatically detect the correct Framework Definition
   * based on the user's project.
   * In this example, if a module matching `litDep`
   * is found in the user's project,
   * Lit will automatically be selected when configuring Component Testing.
   */
  detectors: [litDep],

  /**
   * Optionally, some conditional logic, based on whether
   * the user selected Vite or webpack.
   */
  dependencies: (bundler) => {
    return [litDep];
  },
});
