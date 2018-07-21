describe("primeFactorization", () => {
  it("handles an input of 2", () => {
    expect(primeFactorization(2)).toEqual([2]);
  });

  it("Test case: 12", () => {
    expect(primeFactorization(12)).toEqual([2,2,3]);
  });

  it("Test case: 600851475143", () => {
    expect(primeFactorization(600851475143)).toEqual([71,839,1471,6857]);
  });
});
