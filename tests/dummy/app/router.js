import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('components', function () {
    this.route('accordion');
    this.route('alerts');
    this.route('badge');
    this.route('breadcrumb');
    this.route('buttons');
    this.route('button-group');
    this.route('card');
    this.route('carousel');
    this.route('close-button');
    this.route('collapse');
    this.route('dropdowns');
    this.route('list-group');
    this.route('modal');
    this.route('navbar');
    this.route('navs-tabs');
    this.route('offcanvas');
    this.route('pagination');
    this.route('placeholders');
    this.route('popovers');
    this.route('progress');
    this.route('spinners');
    this.route('toasts');
    this.route('tooltips');
  });
  this.route('getting-started');
});
