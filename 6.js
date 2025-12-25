function updateNested(obj, path, value) {
  if (path.length === 0) return value;

  const [key, ...rest] = path;
  return {
    ...obj,
    [key]: updateNested(obj[key], rest, value),
  };
}
