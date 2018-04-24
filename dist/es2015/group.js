import { getObjectValue } from './utils';

export let GroupValueConverter = class GroupValueConverter {
  toView(array, propertyName) {
    if (!array || !propertyName) return array;

    const groups = {};

    array.forEach(obj => {
      let group = getObjectValue(obj, propertyName);

      if (isMissing(group)) group = '';

      groups[group] = groups[group] || [];
      groups[group].push(obj);
    });

    return Object.keys(groups).map(group => {
      return {
        group: group,
        values: groups[group]
      };
    });
  }
};

function isMissing(val) {
  return val === null || typeof val === 'undefined';
}