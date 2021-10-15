'use strict';

module.exports = {
  description: '',

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  normalizeEntityName() {}, // eslint-disable-line

  afterInstall(/*options*/) {
    // Perform extra work here.

    return this.addPackageToProject('bootstrap');
  },
};
