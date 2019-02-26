# jest-example

- Jest Example with react via typescript

## Install

### Install React

```bash
yarn add react react-dom
yarn add -D @types/react @types/react-dom babel-preset-env babel-preset-react babel-preset-typescript parcel-bundler ts-node typescript
```

### Install ts-jest

```bash
yarn add -D ts-jest react-test-renderer @types/jest @types/react-test-renderer
```

### Install enzyme

- A library that's useful for testing the react components
- [Enzyme github](https://github.com/airbnb/enzyme)

```bash
yarn add -D enzyme enzyme-adapter-react-16 @types/enzyme @types/enzyme-adapter-react-16
```

## Jest Snapshot Concept

- Jest create the sanpshot automatically.
- After when the test fail, check the source code was updated or not.
- If the source code was updated, update shanpshot.
- If the source code isn't updated, there is a bug
