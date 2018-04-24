'use strict';

System.register(['./utils', './utils.js'], function (_export, _context) {
  "use strict";

  var getObjectValue, dateComparison, isDate, isString, SortValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _isDesc(direction) {
    return direction.toLowerCase() === 'desc';
  }

  return {
    setters: [function (_utils) {
      getObjectValue = _utils.getObjectValue;
    }, function (_utilsJs) {
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

          return array.slice(0).sort(function (a, b) {
            var aProp = getObjectValue(a, propertyName);
            var bProp = getObjectValue(b, propertyName);

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