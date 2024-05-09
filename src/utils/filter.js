/**
 * Filters an array of objects based on a filter object.
 * @param {Array} array - The array of objects to filter.
 * @param {Object} filter - The filter object.
 * @returns {Array} The filtered array of objects.
 */
exports.filterObjects = (array, filter) => {
  return array.filter((obj) => {
    for (let key in filter) {
      if (obj[key] !== filter[key]) {
        return false;
      }
    }
    return true;
  });
};
