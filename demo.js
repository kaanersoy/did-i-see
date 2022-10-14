didISee(
  ".withObserving",
  ({ target }) => {
    console.log("we saw it!", target);
  },
  {
    once: true,
    multipleElement: true,
  }
);
