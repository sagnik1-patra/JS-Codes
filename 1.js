function deepMerge(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (
      obj1[key] &&
      obj2[key] &&
      typeof obj1[key] === "object" &&
      typeof obj2[key] === "object" &&
      !Array.isArray(obj1[key])
    ) {
      result[key] = deepMerge(obj1[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }

  return result;
}
