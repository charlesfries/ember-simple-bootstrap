import BsBaseComponent from '../base';

export interface BsListGroupItemComponentSignature {
  Element: HTMLLIElement;
  Blocks: {
    default: [];
  };
}

export default class BsListGroupItemComponent extends BsBaseComponent<BsListGroupItemComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::ListGroup::Item': typeof BsListGroupItemComponent;
    'bs/list-group/item': typeof BsListGroupItemComponent;
  }
}
