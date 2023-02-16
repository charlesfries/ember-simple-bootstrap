import BsBaseComponent from './base';

import type BsCardBodyComponent from './card/body';
import type BsCardFooterComponent from './card/footer';
import type BsCardHeaderComponent from './card/header';

export interface BsCardComponentSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [
      {
        header: typeof BsCardHeaderComponent;
        body: typeof BsCardBodyComponent;
        footer: typeof BsCardFooterComponent;
      }
    ];
  };
}

export default class BsCardComponent extends BsBaseComponent<BsCardComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Card': typeof BsCardComponent;
  }
}
