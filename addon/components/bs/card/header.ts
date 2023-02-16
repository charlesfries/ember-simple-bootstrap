import BsBaseComponent from '../base';

export interface BsCardHeaderComponentSignature {
  Element: HTMLElement;
  Args: {
    title?: string;
  };
  Blocks: {
    default: [];
  };
}

export default class BsCardHeaderComponent extends BsBaseComponent<BsCardHeaderComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Card::Header': typeof BsCardHeaderComponent;
    'bs/card/header': typeof BsCardHeaderComponent;
  }
}
