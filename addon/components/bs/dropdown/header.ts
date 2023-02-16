import BsBaseComponent from '../base';

export interface BsDropdownHeaderComponentSignature {
  Element: HTMLHeadingElement;
  Blocks: {
    default: [];
  };
}

export default class BsDropdownHeaderComponent extends BsBaseComponent<BsDropdownHeaderComponentSignature> {}
