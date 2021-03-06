'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateFormatValueConverter = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateFormatValueConverter = exports.DateFormatValueConverter = function () {
  function DateFormatValueConverter() {
    _classCallCheck(this, DateFormatValueConverter);
  }

  DateFormatValueConverter.prototype.toView = function toView(dt, format) {
    if (!dt) return dt;
    if (!format) format = 'M/D/YYYY h:mm a';

    return (0, _moment2.default)(dt).format(format);
  };

  DateFormatValueConverter.prototype.fromView = function fromView(strDate) {
    return new Date(strDate);
  };

  return DateFormatValueConverter;
}();