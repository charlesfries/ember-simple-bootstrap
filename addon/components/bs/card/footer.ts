import BsBaseComponent from '../base';

export interface BsCardFooterComponentSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

export default class BsCardFooterComponent extends BsBaseComponent<BsCardFooterComponentSignature> {}
