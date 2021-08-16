import BsBaseComponent from './base';
import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';

export interface BsPaginationComponentArgs {
	curPage: number;
	perPage: number;
	totalItems: number;
	onNext: Function;
	onPrevious: Function;
	onSelect: Function;
}

export default class BsPaginationComponent extends BsBaseComponent<BsPaginationComponentArgs> {
	constructor(owner: unknown, args: BsPaginationComponentArgs) {
		super(owner, args);
		assert('<Bs::Pagination />: Must pass a curPage number', typeOf(this.args.curPage) === 'number');
		assert('<Bs::Pagination />: Must pass a perPage number', typeOf(this.args.perPage) === 'number');
		assert('<Bs::Pagination />: Must pass an onNext string', typeOf(this.args.onNext) === 'function');
		assert('<Bs::Pagination />: Must pass an onPrevious string', typeOf(this.args.onPrevious) === 'function');
		assert('<Bs::Pagination />: Must pass an onSelect string', typeOf(this.args.onSelect) === 'function');
	}

	get pages(): number[] {
		let num = Math.ceil(this.args.totalItems / this.args.perPage);
		return new Array(num);
	}

	get range(): { min: number; max: number } {
		let spread = 3;
		let range = {} as Record<string, number>;
		range.min = Math.max(this.args.curPage - spread, 0);
		range.max = Math.min(range.min + spread * 2, this.pages.length);
		return range as any;
	}

	get canPrev(): boolean {
		return this.args.curPage > 0;
	}

	get canNext(): boolean {
		return this.args.curPage < this.pages.length - 1;
	}
}
