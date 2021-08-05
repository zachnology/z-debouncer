# Welcome to debouncer 🏓
![Version](https://github.com/zachnology/debouncer/actions/workflows/npm-publish.yml/badge.svg)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/zachnology/debouncer/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/zachnology/debouncer)](https://github.com/zachnology/debouncer/blob/master/LICENSE)

> Simple JS debounce functionality

### 🏠 [Homepage](https://github.com/zachnology/debouncer#readme)

## Install

```sh
npm install debouncer
```

## Usage
```js
const debouncer = require('debouncer');

let debounce = debouncer.create();

debounce.add(() => console.log('Hello World'));
debounce.add(() => console.log('Hello World 2'));
debounce.add(() => console.log('Hello World 3'));

// Hello World 3
```

## Event Handling
```html
<button id="someButton" onclick="buttonEvent()">Click Me</button>
```
```js
let debounce = debouncer.create();

function buttonEvent() {
    debounce.add(() => console.log('Only run once!'));
}
```

## API

### debouncer.create(delay)

Creates a new instance of Debouncer.

| Parameter | Type | Description |
|-----------|------|-------------|
| delay | number | Millisecond delay for before running. Defaults to 1000 |


### [instance].add(func) 

Add a function call to the debounce stack, replacing any existing calls.

| Parameter | Type | Description |
|-------|------|-------------|
| func | function | Function to run |

## Author

👤 **zachnology**

* Github: [@zachnology](https://github.com/zachnology)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/zachnology/debouncer/issues). You can also take a look at the [contributing guide](https://github.com/zachnology/debouncer/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2021 [Zack Gomez](https://github.com/zachnology).

This project is [MIT](https://github.com/zachnology/debouncer/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_