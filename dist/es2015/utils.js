import moment from 'moment';
import topath from 'lodash.topath';

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

export function getObjectValue(obj, propertyPath) {
  if (!obj) {
    throw new Error('Must provide an object to get the value');
  }
  if (!propertyPath) {
    return obj;
  }

  const paths = topath(propertyPath);
  const length = paths.length;

  let result = obj;
  for (let i = 0; i < length && result; ++i) {
    result = result[paths[i]];
  }

  return result;
}