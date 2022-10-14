# did-i-see

A hook for when see elements in viewport of browser.

Build with [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

## Example Usage

```js
const options = {
  once: true,
  ...
};

didISee(
  ".element",
  () => {
    console.log("I saw the element");
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
