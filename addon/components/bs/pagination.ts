import BsBaseComponent from './base';

export interface BsPaginationComponentArgs {
	curPage: number
	perPage: number
	totalItems: number
	onNext: Function
	onPrevious: Function
	onSelect: Function
}

export default class BsPaginationComponent extends BsBaseComponent<BsPaginationComponentArgs> {
	get pages() {
		let num = Math.ceil(this.args.totalItems / this.args.perPage);
		return new Array(num);
	}

	get range() {
		let spread = 3;
		let range = {} as any;
		range.min = Math.max(this.args.curPage - spread, 0);
		range.max = Math.min(range.min + spread * 2, this.pages.length);
		return range;
	}

	get canPrev() {
		return this.args.curPage > 0;
	}

	get canNext() {
		return this.args.curPage < this.pages.length - 1;
	}
}
