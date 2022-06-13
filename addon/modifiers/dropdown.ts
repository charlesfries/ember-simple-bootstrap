import { modifier } from 'ember-modifier';
import { Dropdown } from 'bootstrap';

export default modifier(
  (element, _positional, named) => {
    element.classList.add('dropdown-toggle');
    element.setAttribute('data-bs-toggle', 'dropdown');

    const dropdown = new Dropdown(element, named);

    return () => {
      dropdown.dispose();

      element.classList.remove('dropdown-toggle');
      element.removeAttribute('data-bs-toggle');
    };
  },
  { eager: false }
);
