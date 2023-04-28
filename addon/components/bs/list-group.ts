import BsBaseComponent from './base';

import type BsListGroupItemComponent from './list-group/item';
import type { ComponentLike, WithBoundArgs } from '@glint/template';

export interface BsListGroupComponentSignature {
  Element: HTMLUListElement;
  Args: {
    flush?: boolean;
    numbered?: boolean;
    horizontal?: boolean;
    color?: string;
  };
  Blocks: {
    default: [
      {
        item: WithBoundArgs<typeof BsListGroupItemComponent, never>;
        'link-to': ComponentLike<{
          Element: HTMLAnchorElement;
          Args: {
            route: string;
            model: unknown;
          };
          Blocks: {
            default: [];
          };
        }>;
      }
    ];
  };
}

export default class BsListGroupComponent extends BsBaseComponent<BsListGroupComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::ListGroup': typeof BsListGroupComponent;
  }
}
