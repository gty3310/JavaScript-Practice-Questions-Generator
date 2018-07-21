describe('subsets', () => {
  it("Correctly returns all subsets of an array", () => {
    const subs = [
      [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]
    ];

    expect(subsets([1, 2, 3])).toEqual(subs);
  });
});
