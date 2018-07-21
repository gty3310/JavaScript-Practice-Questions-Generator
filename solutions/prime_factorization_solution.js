function primeFactorization(num) {
  if (num === 1) return [];
  const upperRange = Math.ceil(Math.sqrt(num));

  for (let i = 2; i <= upperRange; i++) {
    if (num % i == 0) {
      let factors = [i].concat(primeFactorization(Math.floor(num / i)));
      return factors;
    }
  }

  return [num];
}
