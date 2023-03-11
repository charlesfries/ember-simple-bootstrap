import BsBaseComponent from './base';

import type { LinkToKeyword } from '@glint/environment-ember-loose/-private/intrinsics/link-to';

export interface BsNavComponentSignature {
  Element: HTMLElement;
  Args: {
    tabs?: boolean;
    pills?: boolean;
  };
  Blocks: {
    default: [
      {
        'link-to': LinkToKeyword;
      }
    ];
  };
}

export default class BsNavComponent extends BsBaseComponent<BsNavComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Nav': typeof BsNavComponent;
  }
}
