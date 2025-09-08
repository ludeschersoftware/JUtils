A lightweight utility package for JavaScript and TypeScript — starting with a unique hash generator and growing into your go-to toolbox.

Built with clarity and modularity in mind, this package is perfect for developers who want clean, reusable functions without the clutter.

---

## ✨ Features

* 🔑 `CreateUniqHash(length)` — Generate readable, structured random hashes
* 🌀 `HashValue(value)` — Create a fast, deterministic 32-bit integer hash from strings
* 📦 `EmptyBox()` — Get a type-safe, initialized `Box` object with zeroed dimensions
* 🔁 `ResolveAsync(promise)` — Wrap any promise in a `Result<T, E>` for safe async handling
* 🎲 Uses `randomInt` from `@ludeschersoftware/math` for consistent randomness
* 🧠 Type-safe and framework-agnostic
* 🪶 Zero dependencies, fully tree-shakable
* 🧱 Designed for expansion: string utilities, state wrappers, and more

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
import {
  CreateUniqHash,
  HashValue,
  EmptyBox,
  ResolveAsync
} from '@ludeschersoftware/utils';

// Unique random hash
const hash = CreateUniqHash(24);
console.log(hash); // → e.g., "A9cF7gH2kL"

// Deterministic string hash
const code = HashValue("Hello World");
console.log(code); // → e.g., 1794106052

// Empty Box object
const box = EmptyBox();
console.log(box); // → { x: 0, y: 0, width: 0, height: 0 }

// Safe async resolution
const result = await ResolveAsync(fetchUser());
if (result.isOk()) {
  console.log("User:", result.unwrap());
} else {
  console.error("Error:", result.unwrapErr());
}
```

---

## 📐 Function Reference

### `CreateUniqHash(length: number): string`

Generates a pseudo-random string of the specified length using a mix of:

* Uppercase letters (`A–Z`) → when `i % 4 === 0`
* Digits (`0–9`) → when `i % 3 === 0`
* Lowercase letters (`a–z`) → otherwise

Internally uses `randomInt(min, max)` from `@ludeschersoftware/math` for consistent, inclusive random number generation.

**Example:**

```ts
CreateUniqHash(12); // → "A9cF7gH2kLz"
CreateUniqHash(20); // → "A1b2C3d4E5f6G7h8I9"
```

---

### `HashValue(value: string): number`

Computes a **deterministic 32-bit integer hash** for a given string.

* Useful for creating stable IDs, cache keys, or simple hash maps.
* Always returns the same integer for the same string input.
* Operates quickly with bitwise math.

⚠️ **Note:** This is not cryptographically secure. Do not use for passwords or security-sensitive applications.

**Example:**

```ts
HashValue("Hello"); // → 69609650
HashValue("Hello"); // → 69609650 (deterministic)
HashValue("World"); // → 83766130
```

---

### `EmptyBox(): Box`

Creates and returns a new `Box` object with **zeroed dimensions**.
The `Box` type is imported from `@ludeschersoftware/types`.

**Shape of `Box`:**

```ts
interface Box {
  x: number;
  y: number;
  width: number;
  height: number;
}
```

**Example:**

```ts
const b = EmptyBox();
// → { x: 0, y: 0, width: 0, height: 0 }
```

---

### `ResolveAsync<T, E = unknown>(promise: Promise<T>): Result<T, E>`

Wraps any promise in a `Result<T, E>` object from `@ludeschersoftware/result`, allowing safe and expressive async handling without try/catch.

* Returns `Result.Ok(data)` if resolved
* Returns `Result.Err(error)` if rejected
* You can optionally specify a custom error type `E`
* Fully type-safe and composable

**Example:**

```ts
// Default error type (unknown)
const result = await ResolveAsync(fetchData());

// Custom error type
const result = await ResolveAsync<User, FetchError>(fetchUser());

if (result.isOk()) {
  const data = result.unwrap();
  console.log("Success:", data);
} else {
  console.error("Failure:", result.unwrapErr());
}
```

---

## 🧱 Roadmap

Planned additions include:

* `debounce`, `throttle`, `memoize`
* String utilities: `slugify`, `camelCase`, `truncate`
* Object helpers: `deepClone`, `merge`, `omit`
* Geometry: `intersects(boxA, boxB)`, `expandBox(box, padding)`

---

## 🧼 License

MIT © Johannes Ludescher

---

## 💬 Feedback & Contributions

This package is just getting started. If you’ve got ideas, improvements, or want to help shape the future of `@ludeschersoftware/utils`, your input is more than welcome.