# ESLint config

## What's included?

- Standard ESLint config
- Prettier
- Simple import sort

## Installation

```
pnpm i -D @cmhpedro/eslint-config
```

## Setup

### React (with Next.js)

`.eslintrc.json`:

```json
{
  "extends": [
    "@cmhpedro/eslint-config", 
    "next/core-web-vitals"
  ]
}
```

### React (without Next.js)

`.eslintrc.json`:

```json
{
  "extends": [
    "@cmhpedro/eslint-config/react"
  ]
}
```
