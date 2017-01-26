import moment from 'moment';

/**
 * Compares two dates (Date objects or strings).
 * @param {Date} a the first date
 * @param {Date} b the second date
 * @return {Number} number representing the diff from a to b
 */
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
