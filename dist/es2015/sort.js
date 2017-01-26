import { dateComparison, isDate, isString } from './utils.js';

function _isDesc(direction) {
  return direction.toLowerCase() === 'desc';
}

export let SortValueConverter = class SortValueConverter {
  toView(array, propertyName, direction) {
    if (!array) return;

    const isDesc = _isDesc(direction || 'asc');
    const factor = isDesc ? -1 : 1;
    const parts = propertyName ? propertyName.split('.') : [];

    return array.slice(0).sort((a, b) => {
      let aProp = a;
      let bProp = b;

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
};