import BsBaseComponent from './base';
import { action } from '@ember/object';
/* global bootstrap */

export interface BsToastComponentArgs {
	onClose?: () => void;
}

export default class BsToastComponent extends BsBaseComponent<BsToastComponentArgs> {
	toast?: any;

	@action didInsert(element: Element) {
		// @ts-ignore
		this.toast = new bootstrap.Toast(element, {
			autohide: false,
		});
		this.toast.show();

		if (this.args.onClose) {
			element.addEventListener('hidden.bs.toast', () => {
				this.args.onClose!();
			});
		}
	}

	willDestroy() {
		this.toast.hide();
	}
}
