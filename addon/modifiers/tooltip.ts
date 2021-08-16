import { modifier } from 'ember-modifier';
/* global bootstrap */

export default modifier(function tooltip(element: Element, [title, placement = 'top']) {
	element.setAttribute('data-bs-toggle', 'tooltip');
	element.setAttribute('data-bs-placement', placement as string);
	element.setAttribute('title', title as string);

	// @ts-ignore
	const tooltip = new bootstrap.Tooltip(element, {
		animation: false,
	});

	return () => {
		element.removeAttribute('data-bs-toggle');
		element.removeAttribute('data-bs-placement');
		element.removeAttribute('title');

		tooltip.dispose();
	};
});
