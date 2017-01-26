'use strict';

System.register(['moment'], function (_export, _context) {
  "use strict";

  var moment;
  function dateComparison(a, b) {
    if (a === null) a = new Date(1900, 0, 1);
    if (b === null) b = new Date(1900, 0, 1);
    return moment(a).diff(moment(b));
  }

  _export('dateComparison', dateComparison);

  function isDate(val) {
    return moment(val, moment.ISO_8601, true).isValid();
  }

  _export('isDate', isDate);

  function isString(val) {
    return typeof val === 'string';
  }

  _export('isString', isString);

  return {
    setters: [function (_moment) {
      moment = _moment.default;
    }],
    execute: function () {}
  };
});