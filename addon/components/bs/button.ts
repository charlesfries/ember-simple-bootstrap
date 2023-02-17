import BsBaseComponent from './base';

export interface BsButtonComponentSignature {
  Element: HTMLButtonElement;
  Args: {
    isSubmit?: true;
    size?: 'sm' | 'lg';
    outline?: boolean;
    color?: string;
  };
  Blocks: {
    default: [];
  };
}

export default class BsButtonComponent extends BsBaseComponent<BsButtonComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Button': typeof BsButtonComponent;
    'bs/button': typeof BsButtonComponent;
  }
}
