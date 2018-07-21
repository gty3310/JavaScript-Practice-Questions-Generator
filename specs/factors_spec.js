describe("#factors", () => {
  it("returns the factors of 10 in order", () => {
    expect(factors(10)).toEqual([1, 2, 5, 10]);
  });

  it("returns just two factors for primes", () => {
    expect(factors(13)).toEqual([1, 13]);
  });
});
