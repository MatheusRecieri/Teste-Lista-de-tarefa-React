import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser"; //importar sempre que fazer a configuração do ESlint com babel
import { defineConfig } from "eslint/config";
// import { version } from "react";

// const { rules } = pluginReact;

console.log("ESlint config load");


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions : {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"]
        },
      },
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      // "react/react-in-jsx-scope": "off"
      "semi": ["error", "always"],
      "prefer-const": ["error"],
      "react/react-in-jsx-scope": "off"
    },
    plugins : {
      react: pluginReact
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
