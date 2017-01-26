'use strict';

System.register(['moment'], function (_export, _context) {
  "use strict";

  var moment, DateFormatValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_moment) {
      moment = _moment.default;
    }],
    execute: function () {
      _export('DateFormatValueConverter', DateFormatValueConverter = function () {
        function DateFormatValueConverter() {
          _classCallCheck(this, DateFormatValueConverter);
        }

        DateFormatValueConverter.prototype.toView = function toView(dt, format) {
          if (!dt) return dt;
          if (!format) format = 'M/D/YYYY h:mm a';

          return moment(dt).format(format);
        };

        DateFormatValueConverter.prototype.fromView = function fromView(strDate) {
          return new Date(strDate);
        };

        return DateFormatValueConverter;
      }());

      _export('DateFormatValueConverter', DateFormatValueConverter);
    }
  };
});