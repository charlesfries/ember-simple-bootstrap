import BsBaseComponent from './base';

import type BsButtonComponent from './button';

export interface BsButtonGroupComponentSignature {
  Element: HTMLElement;
  Args: {
    isSubmit?: true;
    size?: string;
    outline?: boolean;
    color?: string;
    vertical?: boolean; // TODO:
    loading?: unknown;
    disabled?: boolean;
    onClick?: () => void;
  };
  Blocks: {
    default: [
      {
        button: typeof BsButtonComponent;
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
