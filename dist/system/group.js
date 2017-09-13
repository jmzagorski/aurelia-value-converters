'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var GroupValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function isMissing(val) {
    return val === null || typeof val === 'undefined';
  }
  return {
    setters: [],
    execute: function () {
      _export('GroupValueConverter', GroupValueConverter = function () {
        function GroupValueConverter() {
          _classCallCheck(this, GroupValueConverter);
        }

        GroupValueConverter.prototype.toView = function toView(array, propertyName) {
          if (!array || !propertyName) return array;

          var groups = {};
          var parts = propertyName.split('.');

          array.forEach(function (obj) {
            var group = null;

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

              if (isMissing(obj[p]) && !isMissing(group)) {
                group = group[p];
              } else if (!isMissing(obj[p])) {
                group = obj[p];
              } else {
                group = '';
              }
            }

            groups[group] = groups[group] || [];
            groups[group].push(obj);
          });

          return Object.keys(groups).map(function (group) {
            return {
              group: group,
              values: groups[group]
            };
          });
        };

        return GroupValueConverter;
      }());

      _export('GroupValueConverter', GroupValueConverter);
    }
  };
});