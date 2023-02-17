# ember-simple-bootstrap

[![npm version](https://badge.fury.io/js/ember-simple-bootstrap.svg)](https://badge.fury.io/js/ember-simple-bootstrap)
[![CI](https://github.com/charlesfries/ember-simple-bootstrap/actions/workflows/ci.yml/badge.svg)](https://github.com/charlesfries/ember-simple-bootstrap/actions/workflows/ci.yml)
[![Ember Observer Score](https://emberobserver.com/badges/ember-simple-bootstrap.svg)](https://emberobserver.com/addons/ember-simple-bootstrap)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b111d5e4-749c-44db-b7d1-77313aa9a653/deploy-status)](https://app.netlify.com/sites/ember-simple-bootstrap/deploys)

This addon aims to be a near carbon copy representation of the latest Bootstrap features and components, using Ember components and modifiers.

This addon is only compatible with Boostrap 5+.

⚠️ This addon is a work in progress. Pull requests are absolutely welcome.


## Compatibility

* Ember.js v3.28 or above
* Ember CLI v3.28 or above
* Node.js v14 or above


## Installation

First, install the addon:

```
ember install ember-simple-bootstrap
```

Import Bootstrap JavaScript:

```js
// app/app.js

import 'bootstrap';
```

Import Bootstrap Sass:

```js
// ember-cli-build.js

const app = new EmberAddon(defaults, {
  sassOptions: {
    includePaths: ['node_modules/bootstrap/scss'],
  },
});
```

```scss
// app/styles/app.scss

@import 'bootstrap';
```


## Usage

[Visit the documentation website](https://ember-simple-bootstrap.netlify.app/components/accordion) to see examples.


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
