import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class BsBaseComponent<S = unknown> extends Component<S> {
  get id(): string {
    return guidFor(this);
  }
}
