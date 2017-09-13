export let GroupValueConverter = class GroupValueConverter {
  toView(array, propertyName) {
    if (!array || !propertyName) return array;

    const groups = {};
    const parts = propertyName.split('.');

    array.forEach(obj => {
      let group = null;

      for (let p of parts) {
        if (isMissing(obj[p]) && !isMissing(group)) {
          group = group[p];
        } else if (!isMissing(obj[p])) {
          group = obj[p];
        } else {
          group = '';
        }
      }

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