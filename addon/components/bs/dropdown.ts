import BsBaseComponent from './base';

import type BsDropdownDividerComponent from './dropdown/divider';
import type BsDropdownHeaderComponent from './dropdown/header';
import type BsDropdownItemComponent from './dropdown/item';

export interface BsDropdownComponentSignature {
  Element: HTMLDivElement;
  Args: {
    align?: 'right';
  };
  Blocks: {
    default: [
      {
        divider: typeof BsDropdownDividerComponent;
        header: typeof BsDropdownHeaderComponent;
        item: typeof BsDropdownItemComponent;
      }
    ];
  };
}

export default class BsDropdownComponent extends BsBaseComponent<BsDropdownComponentSignature> {}
