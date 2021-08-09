ember-simple-bootstrap
==============================================================================

[Short description of the addon.]


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

First, install peer dependencies:

```
ember install ember-cli-sass
npm install --save-dev bootstrap
```

Then import JavaScript:

```js
// ember-cli-build.js

app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
```

Then import Sass:

```scss
// app.scss

@import "node_modules/bootstrap/scss/bootstrap";
```

Finally, install the addon:

```
ember install ember-simple-bootstrap
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]

```hbs
<Bs::Accordion />
<Bs::Alert />
<Bs::Breadcrumb />
<Bs::Button />
<Bs::Card />
<Bs::Dropdown />
<Bs::Modal />
<Bs::Nav />
<Bs::Offcanvas />
<Bs::Pagination />
<Bs::Progress />
<Bs::Spinner />
<Bs::Toast />
<Bs::Toolbar />
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
