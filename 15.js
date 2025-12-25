function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    const k = obj[key];
    acc[k] = acc[k] ? [...acc[k], obj] : [obj];
    return acc;
  }, {});
}
