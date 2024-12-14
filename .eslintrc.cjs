import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // Ignore patterns for directories and files
  {
    ignores: ["dist"],
  },
  {
    // Target all JavaScript and JSX files
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020, // Set the ECMAScript version
      sourceType: "module", // Use ES modules
      globals: {
        ...globals.browser, // Enable browser global variables
        ...globals.node, // Enable Node.js global variables
      },
      parserOptions: {
        ecmaVersion: "latest", // Use the latest ECMAScript features
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax
        },
      },
    },
    // React-specific settings
    settings: {
      react: {
        version: "18.2", // Set the React version (e.g., 18.2 or 18.3)
      },
    },
    // Define plugins
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    // Define rules
    rules: {
      ...js.configs.recommended.rules, // Use ESLint recommended rules
      ...react.configs.recommended.rules, // Use React recommended rules
      ...react.configs["jsx-runtime"].rules, // Use JSX runtime rules
      ...reactHooks.configs.recommended.rules, // Use React Hooks rules
      "react/jsx-no-target-blank": "off", // Turn off this rule
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ], // Warn for export-only components with specific allowance
    },
  },
];
