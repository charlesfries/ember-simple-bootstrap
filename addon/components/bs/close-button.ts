import BsBaseComponent from './base';

export interface BsCloseButtonComponentSignature {
  Element: HTMLButtonElement;
  Args: {
    white?: boolean;
  };
}

export default class BsCloseButtonComponent extends BsBaseComponent<BsCloseButtonComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::CloseButton': typeof BsCloseButtonComponent;
  }
}
