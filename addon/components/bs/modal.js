import BsBaseComponent from './base';
import { action } from '@ember/object';
/* global bootstrap */

/**
 * ARGS
 * title?: string?
 * size?: 'sm'|'lg'|'xl'
 * static?: boolean
 * scroll?: boolean
 * fullscreen?: boolean
 * onClose: Function
 */

export default class BsModalComponent extends BsBaseComponent {
	modal;

	@action didInsert(element) {
		this.modal = new bootstrap.Modal(element, { backdrop: this.args.static ? 'static' : true });
		this.modal.show();

		element.addEventListener('shown.bs.modal', () => {
			let autofocus = element.querySelector('[autofocus]');
			if (autofocus) {
				autofocus.focus();
			}
		});

		element.addEventListener('hidden.bs.modal', () => {
			this.args.onClose();
		});
	}

	willDestroy() {
		this.modal.hide();
		// this.modal.dispose();
	}
}
