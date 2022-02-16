import Modifier from 'ember-modifier';
import { Dropdown } from 'bootstrap';

import type { ModifierArgs } from 'ember-modifier/-private/interfaces';

interface Named extends Dropdown.Options {
  [x: string]: any;
}

export interface DropdownModifierArgs extends ModifierArgs {
  positional: unknown[];
  named: Named;
}

export default class DropdownModifier extends Modifier<DropdownModifierArgs> {
  dropdown?: Dropdown;

  override didReceiveArguments() {
    this.element.classList.add('dropdown-toggle');
    this.element.setAttribute('data-bs-toggle', 'dropdown');

    this.dropdown = new Dropdown(this.element, {
      ...this.args.named,
    });
  }

  override willDestroy() {
    this.element.classList.remove('dropdown-toggle');
    this.element.removeAttribute('data-bs-toggle');

    if (this.dropdown) {
      this.dropdown.dispose();
    }
  }
}
