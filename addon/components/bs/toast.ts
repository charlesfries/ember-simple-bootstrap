import BsBaseComponent from './base';
import { action } from '@ember/object';
/* global bootstrap */

export interface BsToastComponentArgs {
	onClose?: () => void;
}

interface Toast {
	show: () => void;
	hide: () => void;
}

export default class BsToastComponent extends BsBaseComponent<BsToastComponentArgs> {
	toast?: Toast;

	@action didInsert(element: Element) {
		// @ts-ignore
		this.toast = new bootstrap.Toast(element, {
			autohide: false,
		});
		this.toast!.show();

		const { onClose } = this.args;
		if (onClose) {
			element.addEventListener('hidden.bs.toast', () => {
				onClose();
			});
		}
	}

	willDestroy() {
		this.toast!.hide();
	}
}
