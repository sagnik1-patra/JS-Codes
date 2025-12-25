function sum(total = 0) {
  return function (next) {
    if (next === undefined) return total;
    return sum(total + next);
  };
}
