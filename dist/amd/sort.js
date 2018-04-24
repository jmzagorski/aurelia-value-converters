define(['exports', './utils', './utils.js'], function (exports, _utils, _utils2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SortValueConverter = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _isDesc(direction) {
    return direction.toLowerCase() === 'desc';
  }

  var SortValueConverter = exports.SortValueConverter = function () {
    function SortValueConverter() {
      _classCallCheck(this, SortValueConverter);
    }

    SortValueConverter.prototype.toView = function toView(array, propertyName, direction) {
      if (!array) return;

      var isDesc = _isDesc(direction || 'asc');
      var factor = isDesc ? -1 : 1;

      return array.slice(0).sort(function (a, b) {
        var aProp = (0, _utils.getObjectValue)(a, propertyName);
        var bProp = (0, _utils.getObjectValue)(b, propertyName);

        if ((0, _utils2.isDate)(aProp) && (0, _utils2.isDate)(bProp)) {
          return (0, _utils2.dateComparison)(aProp, bProp) * factor;
        }

        if ((0, _utils2.isString)(aProp)) aProp = aProp.toLowerCase();
        if ((0, _utils2.isString)(bProp)) bProp = bProp.toLowerCase();

        return (aProp > bProp ? 1 : -1) * factor;
      });
    };

    return SortValueConverter;
  }();
});