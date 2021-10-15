import { modifier } from 'ember-modifier';

interface Args {
  // config
  animation?: boolean;
  delay?: number | Record<string, unknown>;
  html?: boolean;
  placement?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  selector?: string | boolean;
  template?: string;
  trigger?: string;
  fallbackPlacements?: string[];
  boundary?: string | Element;
  customClass?: string | (() => void);
  sanitize?: boolean;
  allowList?: Record<string, unknown>;
  sanitizeFn?: null | (() => void);
  offset?: number[] | string | (() => void);
  popperConfig?: null | Record<string, unknown> | (() => void);

  // events
  onShow?: () => void;
  onShown?: () => void;
  onHide?: () => void;
  onHidden?: () => void;
}

export default modifier(function tooltip(
  element: Element,
  [title]: unknown[],
  args: Args
): () => void {
  const tooltip = new (window as any).bootstrap.Tooltip(element, {
    title,
    ...args,
  });

  if (args.onShow) {
    element.addEventListener('show.bs.tooltip', args.onShow);
  }
  if (args.onShown) {
    element.addEventListener('shown.bs.tooltip', args.onShown);
  }
  if (args.onHide) {
    element.addEventListener('hide.bs.tooltip', args.onHide);
  }
  if (args.onHidden) {
    element.addEventListener('hidden.bs.tooltip', args.onHidden);
  }

  return () => {
    tooltip.dispose();
  };
});
