'use strict';

System.register(['moment', 'lodash.topath'], function (_export, _context) {
  "use strict";

  var moment, topath;
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

  function getObjectValue(obj, propertyPath) {
    if (!obj) {
      throw new Error('Must provide an object to get the value');
    }
    if (!propertyPath) {
      return obj;
    }

    var paths = topath(propertyPath);
    var length = paths.length;

    var result = obj;
    for (var i = 0; i < length && result; ++i) {
      result = result[paths[i]];
    }

    return result;
  }

  _export('getObjectValue', getObjectValue);

  return {
    setters: [function (_moment) {
      moment = _moment.default;
    }, function (_lodashTopath) {
      topath = _lodashTopath.default;
    }],
    execute: function () {}
  };
});