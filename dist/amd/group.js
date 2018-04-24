define(['exports', './utils'], function (exports, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.GroupValueConverter = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var GroupValueConverter = exports.GroupValueConverter = function () {
    function GroupValueConverter() {
      _classCallCheck(this, GroupValueConverter);
    }

    GroupValueConverter.prototype.toView = function toView(array, propertyName) {
      if (!array || !propertyName) return array;

      var groups = {};

      array.forEach(function (obj) {
        var group = (0, _utils.getObjectValue)(obj, propertyName);

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
  }();

  function isMissing(val) {
    return val === null || typeof val === 'undefined';
  }
});