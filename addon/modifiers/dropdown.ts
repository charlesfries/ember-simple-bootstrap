import { modifier } from 'ember-modifier';

interface Args {
	boundary?: string | Element;
	reference?: string | Element | Record<string, unknown>;
	display?: string;
	offset?: Array<any> | string | (() => void);
	autoClose?: boolean | string;
	popperConfig?: null | Record<string, unknown> | (() => void);
}

export default modifier(function dropdown(element: Element, _arr: any, { boundary, reference, display, offset, autoClose, popperConfig }: Args) {
	element.classList.add('dropdown-toggle');
	element.setAttribute('data-bs-toggle', 'dropdown');

	if (boundary) {
		element.setAttribute('data-bs-boundary', boundary as string);
	}
	if (reference) {
		element.setAttribute('data-bs-reference', reference as string);
	}
	if (display) {
		element.setAttribute('data-bs-display', display as string);
	}
	if (offset) {
		element.setAttribute('data-bs-offset', offset as string);
	}
	if (autoClose) {
		element.setAttribute('data-bs-auto-close', autoClose as string);
	}
	if (popperConfig) {
		element.setAttribute('data-bs-popper-config', popperConfig as any);
	}

	return () => {
		element.classList.remove('dropdown-toggle');
		element.removeAttribute('data-bs-toggle');

		element.removeAttribute('data-bs-boundary');
		element.removeAttribute('data-bs-reference');
		element.removeAttribute('data-bs-display');
		element.removeAttribute('data-bs-offset');
		element.removeAttribute('data-bs-auto-close');
		element.removeAttribute('data-bs-popper-config');
	};
});
