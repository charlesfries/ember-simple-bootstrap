import BsBaseComponent from './base';
import { action } from '@ember/object';
/* global bootstrap */

export interface BsOffcanvasComponentArgs {
	placement?: 'start' | 'end' | 'bottom';
	onClose?: () => void;
}

export default class BsOffcanvasComponent extends BsBaseComponent<BsOffcanvasComponentArgs> {
	offcanvas?: any;

	@action didInsert(element: Element) {
		// @ts-ignore
		this.offcanvas = new bootstrap.Offcanvas(element, {});
		this.offcanvas.show();

		if (this.args.onClose) {
			element.addEventListener('hidden.bs.offcanvas', () => {
				this.args.onClose!();
			});
		}
	}

	willDestroy() {
		this.offcanvas.hide();
	}
}
