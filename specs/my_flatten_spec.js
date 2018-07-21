describe("flatten", () => {
  it('Flattens arrays correctly', () => {
    const array = [1, 2, 3, [4, [5, 6]], [[[7]], 8]];
    expect(array.flatten()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
