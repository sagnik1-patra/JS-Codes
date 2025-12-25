function process(str) {
  return Promise.resolve(str)
    .then(s => s.trim())
    .then(s => s.toUpperCase())
    .then(s => s.split("").reverse().join(""));
}
