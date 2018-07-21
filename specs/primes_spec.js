describe("#primes", () => {
  it("returns first five primes in order", () => {
    expect(primes(5)).toEqual([2, 3, 5, 7, 11]);
  });

  it("returns an empty array when asked for zero primes", () => {
    expect(primes(0)).toEqual([]);
  });
});
