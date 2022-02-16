import Modifier from 'ember-modifier';
import { Tooltip } from 'bootstrap';

import type { ModifierArgs } from 'ember-modifier/-private/interfaces';

interface Named extends Tooltip.Options {
  onShow?: () => void;
  onShown?: () => void;
  onHide?: () => void;
  onHidden?: () => void;
  [x: string]: any;
}

export interface TooltipModifierArgs extends ModifierArgs {
  positional: [string];
  named: Named;
}

export default class TooltipModifier extends Modifier<TooltipModifierArgs> {
  tooltip?: Tooltip;

  override didReceiveArguments() {
    const [title] = this.args.positional;
    const { onShow, onShown, onHide, onHidden } = this.args.named;

    this.tooltip = new Tooltip(this.element, {
      ...this.args.named,
      title,
    });

    if (onShow) {
      this.element.addEventListener('show.bs.tooltip', onShow);
    }
    if (onShown) {
      this.element.addEventListener('shown.bs.tooltip', onShown);
    }
    if (onHide) {
      this.element.addEventListener('hide.bs.tooltip', onHide);
    }
    if (onHidden) {
      this.element.addEventListener('hidden.bs.tooltip', onHidden);
    }
  }

  override willDestroy() {
    if (this.tooltip) {
      this.tooltip.dispose();
    }
  }
}
