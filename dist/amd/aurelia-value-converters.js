define(['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(aurelia) {
    aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./date-format'), _aureliaPal.PLATFORM.moduleName('./sort'), _aureliaPal.PLATFORM.moduleName('./group'));
  }
});