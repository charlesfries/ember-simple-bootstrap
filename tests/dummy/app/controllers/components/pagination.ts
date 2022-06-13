import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ComponentsPaginationController extends Controller {
  @tracked currentPage = 0;
  perPage = 10;
  totalItems = 100;
}
