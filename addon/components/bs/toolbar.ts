import BsBaseComponent from './base';

import type BsButtonGroupComponent from './button-group';

export interface BsToolbarComponentSignature {
  Element: HTMLDivElement;
  Args: {
    size?: 'sm' | 'lg';
  };
  Blocks: {
    default: [
      {
        group: typeof BsButtonGroupComponent;
      }
    ];
  };
}

export default class BsToolbarComponent extends BsBaseComponent<BsToolbarComponentSignature> {}
