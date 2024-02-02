import BsBaseComponent from './base';

export interface BsNavComponentSignature {
  Element: HTMLElement;
  Args: {
    tabs?: boolean;
    pills?: boolean;
  };
  Blocks: {
    default: [];
  };
}

export default class BsNavComponent extends BsBaseComponent<BsNavComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Nav': typeof BsNavComponent;
  }
}
