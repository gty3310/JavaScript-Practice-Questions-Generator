function fibsSum(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibsSum(n - 1) + fibsSum(n - 2) + 1;
}
