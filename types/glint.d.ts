import '@glint/environment-ember-loose';
import { ComponentLike, HelperLike, ModifierLike } from '@glint/template';
import { AnyFunction } from '@glint/template/-private/integration';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    // @ember/render-modifiers

    'did-insert': ModifierLike<{
      Element: HTMLElement;
      Args: { Positional: [(element: HTMLElement) => void] };
    }>;

    // ember-cli-string-helpers

    'html-safe': HelperLike<{
      Args: { Positional: [...value: unknown[]] };
      Return: boolean;
    }>;

    // ember-code-snippet

    CodeBlock: ComponentLike<{
      Args: {
        code: string;
        language?: string;
      };
    }>;
    Snippet: ComponentLike<{
      Args: {
        name: string;
      };
    }>;

    'get-code-snippet': HelperLike<{
      Args: { Positional: [string] };
      Return: {
        source: string;
        language: string;
      };
    }>;

    // ember-composable-helpers

    optional: HelperLike<{
      Args: { Positional: [value?: unknown] };
      Return: () => void;
    }>;
    or: HelperLike<{
      Args: { Positional: [...value: unknown[]] };
      Return: unknown;
    }>;

    // ember-event-helpers

    'prevent-default': HelperLike<{
      Args: { Positional: [() => void] };
      Return: AnyFunction;
    }>;

    // ember-math-helpers

    inc: HelperLike<{
      Args: { Positional: [value: number] };
      Return: number;
    }>;
    dec: HelperLike<{
      Args: {
        Positional: [value: number | unknown];
      };
      Return: number;
    }>;

    // ember-page-title

    'page-title': HelperLike<{
      Args: { Positional: [title: string] };
      Return: void;
    }>;

    // ember-truth-helpers

    eq: HelperLike<{
      Args: { Positional: [...value: unknown[]] };
      Return: boolean;
    }>;
  }
}
