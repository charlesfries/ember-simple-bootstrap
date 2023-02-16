import BsBaseComponent from './base';

export interface BsPlaceholderComponentSignature {
  Element: HTMLElement;
}

export default class BsPlaceholderComponent extends BsBaseComponent<BsPlaceholderComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Placeholder': typeof BsPlaceholderComponent;
  }
}
