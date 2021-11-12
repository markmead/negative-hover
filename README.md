![](https://img.shields.io/bundlephobia/min/negative-hover)
![](https://img.shields.io/npm/v/negative-hover)
![](https://img.shields.io/npm/dt/negative-hover)
![](https://img.shields.io/github/license/markmead/negative-hover)

# Negative Hover

It's a hover effect but in reverse.

Apply class(es) to all targeted elements that are currently not on hover within a parent element.

![Screen Recording 2021-11-12 at 09 01 10](https://user-images.githubusercontent.com/50486078/141442043-c4472f73-0a44-4142-9cdc-e2a3443e3576.gif)

## Install

### Packages

```shell
npm i -D negative-hover
yarn add -D negative-hover
```

### CDN

```html
<script src="https://unpkg.com/negative-hover@latest/dist/index.js"></script>
```

## Usage

```js
import NegativeHover from 'negative-hover'

new NegativeHover('#parentTarget', { target: 'a', css: 'inactive' })
```

### Markup

```html
<ul id="parentTarget">
  <li>
    <a href="/">Home</a>
  </li>

  <li>
    <a href="/about">About</a>
  </li>

  <li>
    <a href="/contact">Contact</a>
  </li>
</ul>
```

## Options

It requires a HTML indentifier for the parent. I'd suggest using an ID.

| Option | Type          | Job                                       |
| ------ | ------------- | ----------------------------------------- |
| Target | String        | Finds all matching elements in the parent |
| CSS    | Array<String> | CSS class or class names to apply         |
