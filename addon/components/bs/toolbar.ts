import BsBaseComponent from './base';

import type BsButtonGroupComponent from './button-group';
import type { WithBoundArgs } from '@glint/template';

export interface BsToolbarComponentSignature {
  Element: HTMLDivElement;
  Args: {
    size?: 'sm' | 'lg';
  };
  Blocks: {
    default: [
      {
        group: WithBoundArgs<typeof BsButtonGroupComponent, 'size'>;
      }
    ];
  };
}

export default class BsToolbarComponent extends BsBaseComponent<BsToolbarComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Toolbar': typeof BsToolbarComponent;
  }
}
