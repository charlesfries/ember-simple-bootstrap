import BsBaseComponent from '../base';

export interface BsDropdownItemComponentSignature {
  Element: HTMLButtonElement;
  Args: {
    color?: string;
  };
  Blocks: {
    default: [];
  };
}

export default class BsDropdownItemComponent extends BsBaseComponent<BsDropdownItemComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Dropdown::Item': typeof BsDropdownItemComponent;
    'bs/dropdown/item': typeof BsDropdownItemComponent;
  }
}
