import BsBaseComponent from '../base';

export interface BsAccordionBodyComponentSignature {
  Element: HTMLElement;
  Blocks: {
    default: [];
  };
}

export default class BsAccordionBodyComponent extends BsBaseComponent<BsAccordionBodyComponentSignature> {}
