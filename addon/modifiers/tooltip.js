import { modifier } from 'ember-modifier';
/* global bootstrap */

export default modifier(function tooltip(element, [title, placement = 'top']) {
	element.setAttribute('data-bs-toggle', 'tooltip');
	element.setAttribute('data-bs-placement', placement);
	element.setAttribute('title', title);

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
