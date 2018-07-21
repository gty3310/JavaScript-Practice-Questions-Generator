describe('firstEvenNumbersSum', () => {
  it("Correctly returns the sum of the first even number", () => {
    expect(firstEvenNumbersSum(1)).toEqual(2);
  });

  it("Returns the sum of the first n even numbers", () => {
    expect(firstEvenNumbersSum(6)).toEqual(42);
  });
});
