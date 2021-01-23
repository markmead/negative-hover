# Negative Hover

Apply classes to all elements within a parent that AREN'T on hover

![](https://img.shields.io/bundlephobia/min/negative-hover)
![](https://img.shields.io/npm/v/negative-hover)
![](https://img.shields.io/npm/dt/negative-hover)
![](https://img.shields.io/github/license/markmead/negative-hover)

## Install

```shell
npm install negative-hover
yarn add negative-hover
```

## Usage

```js
import NegativeHover from 'negative-hover'

new NegativeHover('#parentTarget', {
  target: 'a',
  css: 'inactive',
}).init()
```

This will look for all `<a>` tags within `#parentTarget` and apply the `inactive` CSS class if they aren't on hover

### Options

| Options  | Type                          | What it does                                                    |
| -------- | ----------------------------- | --------------------------------------------------------------- |
| `target` | string                        | is passed `querySelectorAll` on the parent element              |
| `css`    | string or an array of strings | is the css class(es) that will be added to each inactive target |

The first argument is the parent element and is required
