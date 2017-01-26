import moment from 'moment';

export class DateFormatValueConverter {
  /**
   * @desc Formats a date value based on a moment format
   * @param {Date} dt the date value
   * @param {String} [format=M/D/YYYY h:mm a] the moment.js format
   * @requires moment.js
   * @return {string} the formated date
   */
  toView(dt, format) {
    if (!dt) return dt;
    if (!format) format = 'M/D/YYYY h:mm a';

    // convert to date because moment depreciated the string construction
    return moment(dt).format(format);
  }

  /**
   * @desc Converts a date string to a date object
   * @param {String} strDate the date as a string recognizable by new Date()
   * @return {Date} the date object
   */
  fromView(strDate) {
    return new Date(strDate);
  }
}
