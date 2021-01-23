# Design system poc

This project includes some components built with LitElement

## Setup

The project is using `lerna` to manage the monorepo.

Install dependencies:

```bash
yarn install
```

## Install dependencies

```bash
lerna bootstrap
```

## Build

This sample uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To watch files and rebuild when the files are modified, run the following command in a separate shell:

```bash
lerna run build:watch
```

## Start react app

```bash
lerna run start
```

## Storybook

We can develop the components and preview and document them with Storybook:

```bash
lerna run build:watch

npm run storybook
```