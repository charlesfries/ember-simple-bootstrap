import BsBaseComponent from '../base';

export interface BsOffcanvasHeaderComponentSignature {
  Element: HTMLDivElement;
  Args: {
    title: string;
  };
}

export default class BsOffcanvasHeaderComponent extends BsBaseComponent<BsOffcanvasHeaderComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Offcanvas::Header': typeof BsOffcanvasHeaderComponent;
    'bs/offcanvas/header': typeof BsOffcanvasHeaderComponent;
  }
}
