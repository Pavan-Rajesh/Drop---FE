
# 🔧 ESLint Flat Config with FlatCompat (Next.js + TypeScript)

This ESLint config is structured for a modern **Next.js** project using **TypeScript**, with support for **Prettier**, **React Hooks**, **Accessibility**, and **import sorting**.

---

## ✅ What is `FlatCompat`?

`FlatCompat` allows you to **reuse legacy ESLint configs** (like `plugin:@typescript-eslint/recommended`) in the new ESLint [Flat Config format](https://eslint.org/docs/latest/use/configure/configuration-files-new).

---

## 📁 File Setup Overview

```ts
import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
```

> Converts `import.meta.url` to `__dirname` so you can resolve the base path relative to the current config file. Required for `FlatCompat`.

---

## 🧱 Creating `compat`

```ts
const compat = new FlatCompat({
  baseDirectory: __dirname,
})
```

> This sets up a `FlatCompat` instance to convert old-style ESLint config extensions.

---

## 🔍 Flat Config Array Breakdown

```ts
export default [
```

### 1. **Ignored Files**

```ts
{
  ignores: ['node_modules', '.next', 'dist'],
}
```

These folders are excluded from linting.

---

### 2. **Legacy Config Conversion**

```ts
...compat.extends(
  'next/core-web-vitals',
  'plugin:@typescript-eslint/recommended',
  'plugin:jsx-a11y/recommended',
  'plugin:react-hooks/recommended',
  'plugin:prettier/recommended',
),
```

> These are converted from legacy style using `FlatCompat`.

* `next/core-web-vitals`: Linting rules optimized for Next.js performance.
* `@typescript-eslint/recommended`: Recommended TypeScript rules.
* `jsx-a11y/recommended`: Accessibility best practices for JSX.
* `react-hooks/recommended`: Best practices for React hooks.
* `prettier/recommended`: Integrates Prettier for code formatting.

---

### 3. **TypeScript-specific Configuration**

```ts
{
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parserOptions: {
      project: './tsconfig.json',
      sourceType: 'module',
      ecmaVersion: 2020,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
```

* Applies only to `.ts` and `.tsx` files.
* Uses the `tsconfig.json` project file.
* Disables:

  * `react/react-in-jsx-scope`: Not needed in Next.js.
  * `@typescript-eslint/explicit-module-boundary-types`: Allows inferred return types.

---

### 4. **Import Sorting Rules**

```ts
{
  files: ['**/*.js', '**/*.ts', '**/*.tsx'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
  },
}
```

* Enforces a consistent order for `import` statements.
* Adds newlines between import groups.

---

## ✅ Summary

| Section                  | Purpose                                  |
| ------------------------ | ---------------------------------------- |
| `ignores`                | Skips unnecessary folders                |
| `compat.extends(...)`    | Uses legacy configs in modern FlatConfig |
| `files: ['**/*.ts,tsx']` | TS-specific rules & parser settings      |
| `rules.import/order`     | Consistent import order with grouping    |
