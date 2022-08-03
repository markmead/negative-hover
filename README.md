# Negative Hover

It's a hover effect but in reverse.

Apply class(es) to all targeted elements that are currently not on hover within a parent element.

![Showcase of package](https://user-images.githubusercontent.com/50486078/141442043-c4472f73-0a44-4142-9cdc-e2a3443e3576.gif)

### Using with a Package Manager

```shell
yarn add -D negative-hover

npm install -D negative-hover
```

```js
import NegativeHover from 'negative-hover'

new NegativeHover('#parentElement', { target: '...', css: '...' })
```

### CDN

For this package to work with a CDN you have to call the `NegativeHover` class on the window object.

```html
<script
  defer
  src="https://unpkg.com/negative-hover@latest/dist/index.js"
></script>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    new window['NegativeHover']('#parentElement', {})
  })
</script>
```

🚀 You can still use the `target` and `classes` options when using the CDN.

## Options

There are three options that you can pass to `new NegativeHover({})`, but they are both required.

```js
new NegativeHover('#parentElement', { target: '...', css: '...' })
```

### Wrapping

This is the wrapping HTML element identifier that is used to group the target elements.

For example, the `<ul id="list">` could be used as the wrapping element for the `<li>` elements.

```html
<ul id="list">
  <li>Hello</li>
  <li>Friend</li>
  <li>How</li>
  <li>Are</li>
  <li>You?</li>
</ul>
```

_Uses `document.querySelector(...)`._

### Target

This is the HTML elements identifier that you want to target.

_Uses `document.querySelectorAll(...)`._

### CSS

Pass a string of CSS class names that will be applied to the elements that are not on hover.

## Stats

![](https://img.shields.io/bundlephobia/min/negative-hover)
![](https://img.shields.io/npm/v/negative-hover)
![](https://img.shields.io/npm/dt/negative-hover)
![](https://img.shields.io/github/license/markmead/negative-hover)
