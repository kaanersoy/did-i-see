# did-i-see

A lightweight function that executes callback when we see DOM elements.

Build with [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

🔴 Demo: https://did-i-see.vercel.app/demo

## Example Usage

```html
<!-- It will inject the didISee to your window -->
<script src="https://did-i-see.vercel.app/index.js">
```

```js
const options = {
  once: true,
  ...
};

window.didISee(
  ".element",
  ({ target }) => {
    console.log("I saw the element", target);
  },
  options
);
```

| Arguments              |                                                                                                    | required |
| ---------------------- | -------------------------------------------------------------------------------------------------- | :------: |
| `query`                | query for selecting DOM elements                                                                   |   true   |
| `callback({ target })` | callback that will called when see element in viewport. it returns saw element in screen as target |   true   |
| `options`              | options of didISee (see options down below for more information)                                   |  false   |

| Options           | type                                                                    | default |
| ----------------- | ----------------------------------------------------------------------- | :-----: |
| `once`            | if it is true callback will fired only one time.                        |  false  |
| `multipleElement` | it means query will work with `querySelectorAll` for multiple elements. |  false  |
| `perc`            | element percentage that will fire callback                              |   0.5   |
| `root`            | root element for scrolling area                                         |  null   |
