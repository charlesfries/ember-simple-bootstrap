import BsBaseComponent from '../base';

export interface BsDropdownDividerComponentSignature {
  Element: HTMLHRElement;
}

export default class BsDropdownDividerComponent extends BsBaseComponent<BsDropdownDividerComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Dropdown::Divider': typeof BsDropdownDividerComponent;
    'bs/dropdown/divider': typeof BsDropdownDividerComponent;
  }
}
