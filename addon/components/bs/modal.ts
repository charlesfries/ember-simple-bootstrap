import BsBaseComponent from './base';
import { action } from '@ember/object';
/global bootstrap */

export interface BsModalComponentArgs {
	title?: string;
	size?: 'sm' | 'lg' | 'xl';
	static?: boolean;
	scroll?: boolean;
	fullscreen?: boolean;
	onClose: () => void;
}

export default class BsModalComponent extends BsBaseComponent<BsModalComponentArgs> {
	modal?: any;

	@action didInsert(element: Element) {
		// @ts-ignore
		this.modal = new bootstrap.Modal(element, { backdrop: this.args.static ? 'static' : true });
		this.modal.show();

		element.addEventListener('shown.bs.modal', () => {
			let autofocus = element.querySelector('[autofocus]') as HTMLInputElement;
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
