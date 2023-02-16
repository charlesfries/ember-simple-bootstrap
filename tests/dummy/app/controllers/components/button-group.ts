import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ComponentsButtonGroupController extends Controller {
  @action
  go() {
    console.log('Go');
  }
}
