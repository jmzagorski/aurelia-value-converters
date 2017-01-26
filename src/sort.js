import {dateComparison, isDate, isString} from './utils.js';

function _isDesc(direction) {
  return direction.toLowerCase() === 'desc';
}

export class SortValueConverter {
  /**
   * @desc Sorts the array
   * @param {Array} array the array to sort
   * @param {String} [propertyName] the property name to group by
   * @param {String} [direction=asc] the direction to sort
   */
  toView(array, propertyName, direction) {
    if (!array) return;

    const isDesc = _isDesc(direction || 'asc');
    const factor = isDesc ? -1 : 1;
    const parts = propertyName ? propertyName.split('.') : [];

    return array.slice(0).sort((a, b) => {
      let aProp = a;
      let bProp = b;

      // iterate until you find the property
      for (let p of parts) {
        aProp = a[p] || aProp[p];
        bProp = b[p] || bProp[p];
      }

      if (isDate(aProp) && isDate(bProp)) {
        return dateComparison(aProp, bProp) * factor;
      }

      if (isString(aProp)) aProp = aProp.toLowerCase();
      if (isString(bProp)) bProp = bProp.toLowerCase();

      return (aProp > bProp ? 1 : -1) * factor;
    });
  }
}
