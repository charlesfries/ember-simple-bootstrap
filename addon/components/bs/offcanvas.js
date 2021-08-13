import BsBaseComponent from './base';
import { action } from '@ember/object';
/* global bootstrap */

/**
 * ARGS
 * placement?: 'start'|'end'|'bottom'
 * onClose?: Function
 */

export default class BsOffcanvasComponent extends BsBaseComponent {
	offcanvas;

	@action didInsert(element) {
		this.offcanvas = new bootstrap.Offcanvas(element, {});
		this.offcanvas.show();

		if (this.args.onClose) {
			element.addEventListener('hidden.bs.offcanvas', () => {
				this.args.onClose();
			});
		}
	}

	willDestroy() {
		this.offcanvas.hide();
	}
}
