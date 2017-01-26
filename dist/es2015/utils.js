import moment from 'moment';

export function dateComparison(a, b) {
  if (a === null) a = new Date(1900, 0, 1);
  if (b === null) b = new Date(1900, 0, 1);
  return moment(a).diff(moment(b));
}

export function isDate(val) {
  return moment(val, moment.ISO_8601, true).isValid();
}

export function isString(val) {
  return typeof val === 'string';
}