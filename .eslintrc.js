const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/react',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],

  plugins: ['prettier', 'import', 'react'],

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        paths: ['src'],
      },
    },
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },

  rules: {
    eqeqeq: ['warn', 'always'],
    'arrow-body-style': ['warn', 'as-needed'],
    'linebreak-style': 'off',
    'prefer-template': 'error',
    'object-curly-newline': 'off',
    'max-len': 'off',
    'generator-star-spacing': ['warn', { before: false, after: true }],
    'consistent-return': 'off',
    'operator-linebreak': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-use-before-define': 'warn',
    'no-unused-labels': 'warn',
    'no-undef': 'warn',
    'no-debugger': 'warn',

    // prettier
    'prettier/prettier': ['warn', prettierOptions],

    // imports
    'import/imports-first': 'off',
    'import/newline-after-import': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'warn',
    'import/no-webpack-loader-syntax': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/no-duplicates': 'warn',
    '@typescript-eslint/no-var-requires': 'off',

    // react
    'react/destructuring-assignment': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react/jsx-closing-tag-location': 'off',
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-uses-vars': 'warn',
    'react/require-default-props': 'off',
    'react/require-extension': 'off',
    'react/self-closing-comp': 'off',
    'react/sort-comp': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
