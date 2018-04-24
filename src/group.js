import { getObjectValue } from './utils';

export class GroupValueConverter {
  /**
   * @desc Groups the array by the property name
   * @param {Array} array the array to group
   * @param {String} propertyName the property name to group by
   */
  toView(array, propertyName) {
    if (!array || !propertyName) return array;

    const groups = { };

    // create the groups
    array.forEach(obj => {
      let group = getObjectValue(obj, propertyName);

      if (isMissing(group)) group = '';

      groups[group] = groups[group] || [];
      groups[group].push(obj);
    });

    // map out to a new object
    return Object.keys(groups).map(group => {
      return {
        group: group,
        values: groups[group]
      };
    });
  }
}

function isMissing(val) {
  return val === null || typeof val === 'undefined';
}
