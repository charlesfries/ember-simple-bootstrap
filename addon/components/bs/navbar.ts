import BsBaseComponent from './base';

export interface BsNavbarComponentSignature {
  Element: HTMLElement;
  Args: {
    expand?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    shade?: 'light' | 'dark';
  };
  Blocks: {
    default: [];
  };
}

export default class BsNavbarComponent extends BsBaseComponent<BsNavbarComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Navbar': typeof BsNavbarComponent;
  }
}
