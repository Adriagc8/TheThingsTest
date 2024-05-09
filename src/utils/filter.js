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
