
---

# Prettier Configuration Documentation

This document outlines and explains the settings used in the provided Prettier configuration.

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2
}
```

---

## Configuration Options

### 1. `semi: false`

* **Description**: Omits semicolons at the ends of statements.
* **Effect**: Prettier will remove semicolons unless they are required to avoid JavaScript parsing issues.
* **Example**:

  ```js
  // With semi: true
  const message = 'Hello';

  // With semi: false
  const message = 'Hello'
  ```

---

### 2. `singleQuote: true`

* **Description**: Use single quotes instead of double quotes in strings.
* **Effect**: Consistency in style across JavaScript and TypeScript files.
* **Example**:

  ```js
  // With singleQuote: false
  const name = "Alice";

  // With singleQuote: true
  const name = 'Alice';
  ```

---

### 3. `trailingComma: "all"`

* **Description**: Adds trailing commas wherever possible, including function parameters and objects.
* **Effect**: Useful for cleaner diffs when adding/removing items.
* **Example**:

  ```js
  // With trailingComma: none
  const user = {
    name: 'Bob',
    age: 25
  }

  // With trailingComma: all
  const user = {
    name: 'Bob',
    age: 25,
  }
  ```

---

### 4. `printWidth: 100`

* **Description**: Sets the maximum line length before Prettier wraps the code.
* **Effect**: Encourages readable code while minimizing horizontal scrolling.
* **Example**:
  Code will wrap after 100 characters to maintain readability across different screens/editors.

---

### 5. `tabWidth: 2`

* **Description**: Specifies the number of spaces per indentation level.
* **Effect**: Helps maintain consistency in code formatting across your project.
* **Example**:

  ```js
  // With tabWidth: 4
  function sayHi() {
      console.log('Hi');
  }

  // With tabWidth: 2
  function sayHi() {
    console.log('Hi');
  }
  ```

---

## Summary

| Option          | Value | Description                            |
| --------------- | ----- | -------------------------------------- |
| `semi`          | false | Omits semicolons                       |
| `singleQuote`   | true  | Prefers single quotes                  |
| `trailingComma` | all   | Includes trailing commas everywhere    |
| `printWidth`    | 100   | Wraps lines longer than 100 characters |
| `tabWidth`      | 2     | Uses 2 spaces per tab                  |

---

### Why This Configuration?

This setup is ideal for teams or individuals who prefer:

* Cleaner diffs in version control.
* Compact and readable code.
* Reduced visual noise (e.g., no semicolons).
* Consistent indentation and line wrapping.

---
