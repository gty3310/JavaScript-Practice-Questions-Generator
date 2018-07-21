function exponent(b, n) {
  if (n === 0) return 1;

  if (n > 0) {
    return b * exponent(b, n - 1);
  } else {
    return 1/b * exponent(b, n + 1);
  }
}
