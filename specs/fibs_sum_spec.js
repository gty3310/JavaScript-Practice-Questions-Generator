describe('fibsSum', () => {
  it('It correctly gets the answer for the 1st fibonacci number', () => {
    expect(fibsSum(1)).toEqual(1);
  });

  it('It correctly gets the answer for the first 2 fibonacci numbers', () => {
    expect(fibsSum(2)).toEqual(2);
  });

  it('It correctly gets the answer for the first 6 fibonacci numbers', () => {
    expect(fibsSum(6)).toEqual(20);
  });
});
