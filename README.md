# ESLint config

## What's included?

- Prettier
- Simple import sort

## Installation

```
pnpm i -D @cmhpedro/eslint-config
```

## Setup

### React

`eslint.config.js`:

```js
import cmhpedroConfig from '@cmhpedro/eslint-config'

export default tseslint.config([
  // ...other configs
  cmhpedroConfig,
])
```
