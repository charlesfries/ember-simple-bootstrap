import BsBaseComponent from './base';

import type BsDropdownDividerComponent from './dropdown/divider';
import type BsDropdownHeaderComponent from './dropdown/header';
import type BsDropdownItemComponent from './dropdown/item';
import type { WithBoundArgs } from '@glint/template';

export interface BsDropdownComponentSignature {
  Element: HTMLDivElement;
  Args: {
    align?: 'right';
  };
  Blocks: {
    default: [
      {
        divider: WithBoundArgs<typeof BsDropdownDividerComponent, never>;
        header: WithBoundArgs<typeof BsDropdownHeaderComponent, never>;
        item: WithBoundArgs<typeof BsDropdownItemComponent, never>;
      }
    ];
  };
}

export default class BsDropdownComponent extends BsBaseComponent<BsDropdownComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Dropdown': typeof BsDropdownComponent;
  }
}
