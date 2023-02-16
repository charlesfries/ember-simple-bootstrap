import BsBaseComponent from '../base';

export interface BsDropdownHeaderComponentSignature {
  Element: HTMLHeadingElement;
  Blocks: {
    default: [];
  };
}

export default class BsDropdownHeaderComponent extends BsBaseComponent<BsDropdownHeaderComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Dropdown::Header': typeof BsDropdownHeaderComponent;
    'bs/dropdown/header': typeof BsDropdownHeaderComponent;
  }
}
