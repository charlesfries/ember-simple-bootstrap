import BsBaseComponent from './base';

export interface BsButtonComponentSignature {
  Element: HTMLButtonElement;
  Args: {
    isSubmit?: boolean;
    size?: 'sm' | 'lg';
    outline?: boolean;
    color?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
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
