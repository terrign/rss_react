module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '.eslintrc.cjs', 'vite.config.ts', '*.css'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', '@typescript-eslint', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prefer-stateless-function': 'off',
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 0,
    'react/destructuring-assignment': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-use-before-define': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': 'off',
    'operator-linebreak': 'off',
    'no-useless-constructor': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
};
