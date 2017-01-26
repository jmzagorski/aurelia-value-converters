define(['exports', './utils.js'], function (exports, _utils) {
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
      var parts = propertyName ? propertyName.split('.') : [];

      return array.slice(0).sort(function (a, b) {
        var aProp = a;
        var bProp = b;

        for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var p = _ref;

          aProp = a[p] || aProp[p];
          bProp = b[p] || bProp[p];
        }

        if ((0, _utils.isDate)(aProp) && (0, _utils.isDate)(bProp)) {
          return (0, _utils.dateComparison)(aProp, bProp) * factor;
        }

        if ((0, _utils.isString)(aProp)) aProp = aProp.toLowerCase();
        if ((0, _utils.isString)(bProp)) bProp = bProp.toLowerCase();

        return (aProp > bProp ? 1 : -1) * factor;
      });
    };

    return SortValueConverter;
  }();
});