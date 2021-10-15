import { modifier } from 'ember-modifier';

interface Args {
  boundary?: string | Element;
  reference?: string | Element | Record<string, unknown>;
  display?: string;
  offset?: number[] | string | (() => void);
  autoClose?: boolean | string;
  popperConfig?: null | Record<string, unknown> | (() => void);
}

export default modifier(function dropdown(
  element: Element,
  _arr: unknown[],
  args: Args
): () => void {
  element.classList.add('dropdown-toggle');
  element.setAttribute('data-bs-toggle', 'dropdown');

  const dropdown = new (window as any).bootstrap.Dropdown(element, {
    ...args,
  });

  return () => {
    element.classList.remove('dropdown-toggle');
    element.removeAttribute('data-bs-toggle');

    dropdown.dispose();
  };
});
