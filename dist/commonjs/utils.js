'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateComparison = dateComparison;
exports.isDate = isDate;
exports.isString = isString;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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