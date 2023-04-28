import BsBaseComponent from './base';

import type BsCardBodyComponent from './card/body';
import type BsCardFooterComponent from './card/footer';
import type BsCardHeaderComponent from './card/header';
import type { WithBoundArgs } from '@glint/template';

export interface BsCardComponentSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [
      {
        header: WithBoundArgs<typeof BsCardHeaderComponent, never>;
        body: WithBoundArgs<typeof BsCardBodyComponent, never>;
        footer: WithBoundArgs<typeof BsCardFooterComponent, never>;
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
