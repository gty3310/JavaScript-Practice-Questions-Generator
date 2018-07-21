function firstEvenNumbersSum(n) {
  if (n === 1) return 2;
  return 2 * n + firstEvenNumbersSum(n - 1);
}
