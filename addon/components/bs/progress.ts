import BsBaseComponent from './base';

import type BsProgressBarComponent from './progress/bar';
import type { WithBoundArgs } from '@glint/template';

export interface BsProgressComponentSignature {
  Element: HTMLElement;
  Blocks: {
    default: [
      {
        bar: WithBoundArgs<typeof BsProgressBarComponent, never>;
      }
    ];
  };
}

export default class BsProgressComponent extends BsBaseComponent<BsProgressComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Progress': typeof BsProgressComponent;
  }
}
