import moment from 'moment';

export let DateFormatValueConverter = class DateFormatValueConverter {
  toView(dt, format) {
    if (!dt) return dt;
    if (!format) format = 'M/D/YYYY h:mm a';

    return moment(dt).format(format);
  }

  fromView(strDate) {
    return new Date(strDate);
  }
};