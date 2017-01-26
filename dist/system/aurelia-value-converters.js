'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function configure(aurelia) {
    aurelia.globalResources('./date-format', './sort', './group');
  }

  _export('configure', configure);

  return {
    setters: [],
    execute: function () {}
  };
});