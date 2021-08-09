import BsBaseComponent from './base';

/**
 * ARGS
 * curPage: number
 * perPage: number
 * totalItems: number
 * onNext: Function
 * onPrevious: Function
 * onSelect: Function
 */

export default class BsPaginationComponent extends BsBaseComponent {
	get pages() {
		let num = Math.ceil(this.args.totalItems / this.args.perPage);
		return new Array(num);
	}

	get range() {
		let spread = 3
		let range = new Object;
		range.min = Math.max(this.args.curPage - spread, 0);
		range.max = Math.min(range.min + spread * 2, this.pages.length);
		return range;
	}

	get canPrev() {
		return this.args.curPage > 0;
	}

	get canNext() {
		return this.args.curPage < (this.pages.length - 1);
	}
}
