A lightweight utility package for JavaScript and TypeScript — starting with a unique hash generator and ready to grow into your go-to toolbox.

Built with clarity and modularity in mind, this package is perfect for developers who want clean, reusable functions without the clutter.

---

## ✨ Features

- 🔑 `CreateUniqHash(length)` — Generate readable, structured random hashes
- 🎲 Uses `randomInt` from `@ludeschersoftware/math` for consistent randomness
- 🧠 Type-safe and framework-agnostic
- 🪶 Zero dependencies, fully tree-shakable
- 🧱 Designed for expansion: string utilities, state wrappers, and more

---

## 📦 Installation

```bash
npm install @ludeschersoftware/utils
# or
yarn add @ludeschersoftware/utils
```

---

## 🔧 Usage

```ts
import { CreateUniqHash } from '@ludeschersoftware/utils';

const hash = CreateUniqHash(24);
console.log(hash); // → e.g., "A-b9C-d8E-Fg7H-Ij6K"
```

---

## 📐 Function Reference

### `CreateUniqHash(length: number): string`

Generates a pseudo-random string of the specified length using a mix of:

- Uppercase letters (A–Z)
- Lowercase letters (a–z)
- Digits (0–9)
- Dashes (`-`) for readability

The character type is chosen based on the index position:

- `i % 4 === 0` → uppercase
- `i % 3 === 0` → lowercase
- `i % 2 === 0` → digit
- otherwise → dash

Internally uses `randomInt(min, max)` from `@ludeschersoftware/math` for consistent, inclusive random number generation.

---

## 🧪 Example Output

```ts
CreateUniqHash(16); // → "A-b9C-d8E-Fg7H"
CreateUniqHash(32); // → "A-b9C-d8E-Fg7H-Ij6K-Lm5N"
```

---

## 🧱 Roadmap

Planned additions include:

- `debounce`, `throttle`, `memoize`
- String utilities: `slugify`, `camelCase`, `truncate`
- Object helpers: `deepClone`, `merge`, `omit`

---

## 🧼 License

MIT © Johannes Ludescher

---

## 💬 Feedback & Contributions

This package is just getting started. If you’ve got ideas, improvements, or want to help shape the future of `@ludeschersoftware/utils`, your input is more than welcome.