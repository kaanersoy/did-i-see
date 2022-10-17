# did-i-see

A lightweight function that executes callback when we see specific DOM elements.

Built with [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

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
  ({ data }) => {
    console.log("I saw the element", data.target);
  },
  options
);
```

| Arguments            |                                                                  | required |
| -------------------- | ---------------------------------------------------------------- | :------: |
| `query`              | query for selecting DOM elements                                 |   true   |
| `callback({ data })` | callback that will be fired when element in viewport             |   true   |
| `options`            | options of didISee (see options down below for more information) |  false   |

| Options        | type                                                                                             | default |
| -------------- | ------------------------------------------------------------------------------------------------ | :-----: |
| `once`         | if it is true callback will be fired only one time for each element                              |  false  |
| `onlyEntrance` | if it is false callback will be fired when element is entering the screen and leaving the screen |  true   |
| `perc`         | percentage of element that callback will be fired                                                |   0.5   |
| `root`         | root element for scrolling area                                                                  |  null   |
