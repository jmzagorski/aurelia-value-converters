export let GroupValueConverter = class GroupValueConverter {
  toView(array, groupName) {
    if (!array || !groupName) return array;

    const groups = {};
    const parts = groupName.split('.');

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