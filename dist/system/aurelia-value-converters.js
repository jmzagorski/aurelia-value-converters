'use strict';

System.register(['aurelia-pal'], function (_export, _context) {
  "use strict";

  var PLATFORM;
  function configure(aurelia) {
    aurelia.globalResources(PLATFORM.moduleName('./date-format'), PLATFORM.moduleName('./sort'), PLATFORM.moduleName('./group'));
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }],
    execute: function () {}
  };
});