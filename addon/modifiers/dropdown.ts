import { modifier } from 'ember-modifier';
import { Dropdown } from 'bootstrap';

export default modifier(
  (element: Element, _positional: unknown[], named: Dropdown.Options) => {
    element.classList.add('dropdown-toggle');
    element.setAttribute('data-bs-toggle', 'dropdown');

    const dropdown = new Dropdown(element, {
      ...named,
    });

    return () => {
      element.classList.remove('dropdown-toggle');
      element.removeAttribute('data-bs-toggle');

      dropdown.dispose();
    };
  },
  { eager: false }
);
