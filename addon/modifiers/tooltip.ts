import { modifier } from 'ember-modifier';
import { Tooltip } from 'bootstrap';

interface Options extends Tooltip.Options {
  onShow?: () => void;
  onShown?: () => void;
  onHide?: () => void;
  onHidden?: () => void;
}

export default modifier<Element, unknown[], Options>(
  (element, positional, named) => {
    const [title] = positional as [string];
    const { onShow, onShown, onHide, onHidden, ...remaining } = named;

    const tooltip = new Tooltip(element, {
      ...remaining,
      title,
    });

    if (onShow) {
      element.addEventListener('show.bs.tooltip', onShow);
    }
    if (onShown) {
      element.addEventListener('shown.bs.tooltip', onShown);
    }
    if (onHide) {
      element.addEventListener('hide.bs.tooltip', onHide);
    }
    if (onHidden) {
      element.addEventListener('hidden.bs.tooltip', onHidden);
    }

    return () => {
      if (onShow) {
        element.removeEventListener('show.bs.tooltip', onShow);
      }
      if (onShown) {
        element.removeEventListener('shown.bs.tooltip', onShown);
      }
      if (onHide) {
        element.removeEventListener('hide.bs.tooltip', onHide);
      }
      if (onHidden) {
        element.removeEventListener('hidden.bs.tooltip', onHidden);
      }

      tooltip.dispose();
    };
  },
  { eager: false }
);
