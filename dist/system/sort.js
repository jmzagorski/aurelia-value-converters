'use strict';

System.register(['./utils.js'], function (_export, _context) {
  "use strict";

  var dateComparison, isDate, isString, SortValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _isDesc(direction) {
    return direction.toLowerCase() === 'desc';
  }

  return {
    setters: [function (_utilsJs) {
      dateComparison = _utilsJs.dateComparison;
      isDate = _utilsJs.isDate;
      isString = _utilsJs.isString;
    }],
    execute: function () {
      _export('SortValueConverter', SortValueConverter = function () {
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

            if (isDate(aProp) && isDate(bProp)) {
              return dateComparison(aProp, bProp) * factor;
            }

            if (isString(aProp)) aProp = aProp.toLowerCase();
            if (isString(bProp)) bProp = bProp.toLowerCase();

            return (aProp > bProp ? 1 : -1) * factor;
          });
        };

        return SortValueConverter;
      }());

      _export('SortValueConverter', SortValueConverter);
    }
  };
});