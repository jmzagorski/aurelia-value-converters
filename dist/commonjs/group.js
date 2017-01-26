'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupValueConverter = exports.GroupValueConverter = function () {
  function GroupValueConverter() {
    _classCallCheck(this, GroupValueConverter);
  }

  GroupValueConverter.prototype.toView = function toView(array, groupName) {
    if (!array || !groupName) return array;

    var groups = {};
    var parts = groupName.split('.');

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

        group = typeof obj[p] === 'undefined' ? group[p] : obj[p];
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
}();