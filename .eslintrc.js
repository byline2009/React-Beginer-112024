module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  rules: {
    "import/default": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // warn
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/ban-types": "warn",
    "prefer-const": "warn",
    "eslint-comments/disable-enable-pair": "warn",
    "jsx-a11y/label-has-associated-control": "warn",
    "react/no-unescaped-entities": "warn",
    "jsx-a11y/interactive-supports-focus": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "no-var": "warn",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "jsx-a11y/no-autofocus": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
