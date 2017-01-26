export let GroupValueConverter = class GroupValueConverter {
  toView(array, propertyName) {
    if (!array || !propertyName) return array;

    const groups = {};
    const parts = propertyName.split('.');

    array.forEach(obj => {
      let group = null;

      for (let p of parts) {
        group = typeof obj[p] === 'undefined' ? group[p] : obj[p];
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