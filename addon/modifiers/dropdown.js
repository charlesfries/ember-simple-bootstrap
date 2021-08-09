import { modifier } from 'ember-modifier';

/**
 * ARGS
 * boundary?: string | element
 * reference?: string | element | object
 * display?: string
 * offset?: array | string | Function
 * autoClose?: boolean | string
 * popperConfig?: null | object | Function
 */

export default modifier(function dropdown(element, [], { boundary, reference, display, offset, autoClose, popperConfig }) {
	element.classList.add('dropdown-toggle');
	element.setAttribute('data-bs-toggle', 'dropdown');

	if (boundary) {
		element.setAttribute('data-bs-boundary', boundary);
	}
	if (reference) {
		element.setAttribute('data-bs-reference', reference);
	}
	if (display) {
		element.setAttribute('data-bs-display', display);
	}
	if (offset) {
		element.setAttribute('data-bs-offset', offset);
	}
	if (autoClose) {
		element.setAttribute('data-bs-auto-close', autoClose);
	}
	if (popperConfig) {
		element.setAttribute('data-bs-popper-config', popperConfig);
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
