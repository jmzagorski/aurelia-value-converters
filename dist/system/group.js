'use strict';

System.register(['./utils'], function (_export, _context) {
  "use strict";

  var getObjectValue, GroupValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function isMissing(val) {
    return val === null || typeof val === 'undefined';
  }
  return {
    setters: [function (_utils) {
      getObjectValue = _utils.getObjectValue;
    }],
    execute: function () {
      _export('GroupValueConverter', GroupValueConverter = function () {
        function GroupValueConverter() {
          _classCallCheck(this, GroupValueConverter);
        }

        GroupValueConverter.prototype.toView = function toView(array, propertyName) {
          if (!array || !propertyName) return array;

          var groups = {};

          array.forEach(function (obj) {
            var group = getObjectValue(obj, propertyName);

            if (isMissing(group)) group = '';

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