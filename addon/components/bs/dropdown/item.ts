import BsBaseComponent from '../base';

export interface BsDropdownItemComponentSignature {
  Element: HTMLButtonElement;
  Args: {
    label?: string;
    color?: string;
    disabled?: unknown;
    onClick?: () => void;
  };
  Blocks: {
    default: [];
  };
}

export default class BsDropdownItemComponent extends BsBaseComponent<BsDropdownItemComponentSignature> {}
