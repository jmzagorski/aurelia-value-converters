import { getObjectValue } from './utils';
import { dateComparison, isDate, isString } from './utils.js';

function _isDesc(direction) {
  return direction.toLowerCase() === 'desc';
}

export let SortValueConverter = class SortValueConverter {
  toView(array, propertyName, direction) {
    if (!array) return;

    const isDesc = _isDesc(direction || 'asc');
    const factor = isDesc ? -1 : 1;

    return array.slice(0).sort((a, b) => {
      let aProp = getObjectValue(a, propertyName);
      let bProp = getObjectValue(b, propertyName);

      if (isDate(aProp) && isDate(bProp)) {
        return dateComparison(aProp, bProp) * factor;
      }

      if (isString(aProp)) aProp = aProp.toLowerCase();
      if (isString(bProp)) bProp = bProp.toLowerCase();

      return (aProp > bProp ? 1 : -1) * factor;
    });
  }
};