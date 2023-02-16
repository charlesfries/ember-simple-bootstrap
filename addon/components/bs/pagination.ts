import BsBaseComponent from './base';
import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';

export interface BsPaginationComponentSignature {
  Element: HTMLElement;
  Args: {
    curPage: number;
    perPage: number;
    totalItems: number;
    onNext: () => void;
    onPrevious: () => void;
    onSelect: () => void;
  };
}

export default class BsPaginationComponent extends BsBaseComponent<BsPaginationComponentSignature> {
  constructor(owner: unknown, args: BsPaginationComponentSignature['Args']) {
    super(owner, args);
    assert(
      '<Bs::Pagination />: Must pass a curPage number',
      typeOf(this.args.curPage) === 'number'
    );
    assert(
      '<Bs::Pagination />: Must pass a perPage number',
      typeOf(this.args.perPage) === 'number'
    );
    assert(
      '<Bs::Pagination />: Must pass an onNext string',
      typeOf(this.args.onNext) === 'function'
    );
    assert(
      '<Bs::Pagination />: Must pass an onPrevious string',
      typeOf(this.args.onPrevious) === 'function'
    );
    assert(
      '<Bs::Pagination />: Must pass an onSelect string',
      typeOf(this.args.onSelect) === 'function'
    );
  }

  get pages(): number[] {
    const num = Math.ceil(this.args.totalItems / this.args.perPage);
    return new Array(num);
  }

  get canPrev(): boolean {
    return this.args.curPage > 0;
  }

  get canNext(): boolean {
    return this.args.curPage < this.pages.length - 1;
  }
}
