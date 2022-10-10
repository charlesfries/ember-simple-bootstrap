'use strict';

module.exports = {
  plugins: ['ember-template-lint-plugin-prettier'],
  extends: ['recommended', 'ember-template-lint-plugin-prettier:recommended'],
  overrides: [
    // fixes Unstable Ember Language Server prettier bug
    {
      files: ['**/integration/**/*-test.{js,ts}'],
      rules: {
        prettier: false,
      },
    },
  ],
};
