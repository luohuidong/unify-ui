module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module"
  },
  extends: ["plugin:vue/vue3-recommended", "prettier", "plugin:storybook/recommended"],
  rules: {}
};