import BsBaseComponent from '../base';

export interface BsAccordionBodyComponentSignature {
  Element: HTMLElement;
  Blocks: {
    default: [];
  };
}

export default class BsAccordionBodyComponent extends BsBaseComponent<BsAccordionBodyComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Accordion::Body': typeof BsAccordionBodyComponent;
    'bs/accordion/body': typeof BsAccordionBodyComponent;
  }
}
