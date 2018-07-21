function primes(count) {
  const primes = [];
  let i = 2;

  const isPrime = (num) => {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }

    return true;
  }

  while (primes.length < count) {
    if (isPrime(i)) primes.push(i);
    i += 1;
  }

  return primes;
}
