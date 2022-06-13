import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class BsBaseComponent<
  Args = Record<string, unknown>
> extends Component<Args> {
  get id(): string {
    return guidFor(this);
  }
}
