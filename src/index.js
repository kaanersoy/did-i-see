const DEFAULT_OPTIONS = {
  once: false,
  perc: 0.5,
  root: null,
  onlyEntrance: true,
};

const validate = (items, callback, options) => {
  // Items required validation
  if (items.length === 0) {
    throw Error("No element found with query. Please try another query.");
  }

  if (!callback || typeof callback !== "function") {
    throw Error("Callback is required and should be in second argument.");
  }

  // Checking options for validity.
  Object.keys(options).forEach((givenOptionKey) => {
    const givenOptionType = typeof options[givenOptionKey];
    const defOption = DEFAULT_OPTIONS[givenOptionKey];
    if (typeof defOption === "undefined") {
      throw Error(`${givenOptionKey} not exists in didISee options. '${Object.keys(DEFAULT_OPTIONS).join(", ")}' check out this options.`);
    }
    if (typeof defOption !== givenOptionType) {
      throw TypeError(`${givenOptionKey} option value should be type of ${typeof defOption}. Given '${givenOptionType}'.`);
    }
  });
};

const didISee = (query, callback, options = {}) => {
  options = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  // Select items
  const items = document.querySelectorAll(query);

  validate(items, callback, options);

  const obsOptions = {
    root: options.root,
    threshold: options.perc,
  };

  // Creating observer
  const observer = new IntersectionObserver((ent, observer) => {
    ent.forEach((entry) => {
      if (options.once) {
        if (entry.intersectionRatio > 0) {
          observer.unobserve(entry.target);
        }
      }
      if (options.onlyEntrance && !entry.isIntersecting) {
        return;
      }
      callback({
        data: entry,
      });
    });
  }, obsOptions);

  // Starting observations
  items.forEach((item) => observer.observe(item));
};

window.didISee = didISee;
