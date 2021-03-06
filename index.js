/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-model-validator',
  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/ember-model-validator/register-version.js');
  }
};
