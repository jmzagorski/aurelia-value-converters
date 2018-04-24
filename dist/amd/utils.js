define(['exports', 'moment', 'lodash.topath'], function (exports, _moment, _lodash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.dateComparison = dateComparison;
  exports.isDate = isDate;
  exports.isString = isString;
  exports.getObjectValue = getObjectValue;

  var _moment2 = _interopRequireDefault(_moment);

  var _lodash2 = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function dateComparison(a, b) {
    if (a === null) a = new Date(1900, 0, 1);
    if (b === null) b = new Date(1900, 0, 1);
    return (0, _moment2.default)(a).diff((0, _moment2.default)(b));
  }

  function isDate(val) {
    return (0, _moment2.default)(val, _moment2.default.ISO_8601, true).isValid();
  }

  function isString(val) {
    return typeof val === 'string';
  }

  function getObjectValue(obj, propertyPath) {
    if (!obj) {
      throw new Error('Must provide an object to get the value');
    }
    if (!propertyPath) {
      return obj;
    }

    var paths = (0, _lodash2.default)(propertyPath);
    var length = paths.length;

    var result = obj;
    for (var i = 0; i < length && result; ++i) {
      result = result[paths[i]];
    }

    return result;
  }
});