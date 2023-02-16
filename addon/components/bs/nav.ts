import BsBaseComponent from './base';

import type { ComponentLike } from '@glint/template';

export interface BsNavComponentSignature {
  Element: HTMLElement;
  Args: {
    tabs?: boolean;
    pills?: boolean;
  };
  Blocks: {
    default: [
      {
        'link-to': ComponentLike<{
          Element: HTMLAnchorElement;
          Args: {
            route: string;
            model?: unknown;
            query?: unknown;
          };
          Blocks: {
            default: [];
          };
        }>;
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
