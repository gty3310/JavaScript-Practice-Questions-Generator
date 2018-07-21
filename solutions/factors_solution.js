function factors(num) {
  let factors = Array.from(Array(num)).map( (el, idx) => idx + 1)
  return factors.filter( el => num % el === 0);
}
