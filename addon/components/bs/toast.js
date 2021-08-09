import BsBaseComponent from './base';
import { action } from '@ember/object';
/* global bootstrap */

/**
 * ARGS
 * onClose?: Function
 */

export default class BsToastComponent extends BsBaseComponent {
	toast;

	@action didInsert(element) {
		this.toast = new bootstrap.Toast(element, {
			autohide: false,
		});
		this.toast.show();

		if (this.args.onClose) {
			element.addEventListener('hidden.bs.toast', () => {
				this.args.onClose();
			});
		}
	}

	willDestroy() {
		this.toast.hide();
	}
}
