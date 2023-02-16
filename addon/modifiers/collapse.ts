import { modifier } from 'ember-modifier';

export default modifier(
  function collapse(element, positional) {
    const target = positional[0];

    element.setAttribute('data-bs-toggle', 'collapse');
    element.setAttribute('data-bs-target', `#${target}`);

    return () => {
      element.removeAttribute('data-bs-target');
      element.removeAttribute('data-bs-toggle');
    };
  },
  { eager: false }
);
