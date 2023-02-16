import BsBaseComponent from '../base';

export interface BsListGroupItemComponentSignature {
  Element: HTMLLIElement;
  Blocks: {
    default: [];
  };
}

export default class BsListGroupItemComponent extends BsBaseComponent<BsListGroupItemComponentSignature> {}
