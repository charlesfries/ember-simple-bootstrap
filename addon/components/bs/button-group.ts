import BsBaseComponent from './base';

import type BsButtonComponent from './button';
import type { WithBoundArgs } from '@glint/template';

export interface BsButtonGroupComponentSignature {
  Element: HTMLElement;
  Args: {
    size?: 'sm' | 'lg';
    vertical?: boolean; // TODO:
  };
  Blocks: {
    default: [
      {
        button: WithBoundArgs<typeof BsButtonComponent, never>;
      }
    ];
  };
}

export default class BsButtonGroupComponent extends BsBaseComponent<BsButtonGroupComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::ButtonGroup': typeof BsButtonGroupComponent;
    'bs/button-group': typeof BsButtonGroupComponent;
  }
}
