import moment from 'moment';

export let DateFormatValueConverter = class DateFormatValueConverter {
  toView(value, format) {
    if (!value) return value;
    if (!format) format = 'M/D/YYYY h:mm a';

    return moment(value).format(format);
  }

  fromView(strDate) {
    return new Date(strDate);
  }
};