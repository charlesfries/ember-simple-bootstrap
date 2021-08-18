import { modifier } from 'ember-modifier';
/* global bootstrap */

interface Args {
	animation?: boolean;
	delay?: number | Record<string, unknown>;
	html?: boolean;
	placement?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
	selector?: string | boolean;
	template?: string;
	trigger?: string;
	fallbackPlacements?: string[];
	boundary?: string | Element;
	offset?: number[] | string | Function;
}

export default modifier(function tooltip(element: Element, [title], args: Args) {
	const { animation, delay, placement } = args;

	// @ts-ignore
	const tooltip = new bootstrap.Tooltip(element, {
		title,
		animation: animation ?? true,
		delay: delay ?? 0,
		placement: placement ?? 'top',
	});

	return () => {
		tooltip.dispose();
	};
});
