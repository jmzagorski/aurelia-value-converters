export class GroupValueConverter {
  /**
   * @desc Groups the array by the property name
   * @param {Array} array the array to group
   * @param {String} propertyName the property name to group by
   */
  toView(array, propertyName) {
    if (!array || !propertyName) return array;

    const groups = { };
    const parts = propertyName.split('.');

    // create the groups
    array.forEach(obj => {
      let group = null;

      // allow grouping on null, empty string, false
      for (let p of parts) {
        group = typeof obj[p] === 'undefined' ? group[p] : obj[p];
      }

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
