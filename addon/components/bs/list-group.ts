import BsBaseComponent from './base';

import type BsListGroupItemComponent from './list-group/item';

export interface BsListGroupComponentSignature {
  Element: HTMLUListElement;
  Args: {
    flush?: boolean;
    numbered?: boolean;
    horizontal?: boolean;
    color?: string;
  };
  Blocks: {
    default: [
      {
        item: typeof BsListGroupItemComponent;
        'link-to': any;
      }
    ];
  };
}

export default class BsListGroupComponent extends BsBaseComponent<BsListGroupComponentSignature> {}
