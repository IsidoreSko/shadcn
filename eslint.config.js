import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": 0, // Désactiver cette règle, car React n'a plus besoin d'être importé explicitement
    },
  },
  {
    ignore: ["tailwind.config.js"],
  },
];
