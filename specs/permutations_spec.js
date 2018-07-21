describe("#permutations", () => {
  it("returns all permutations of an array", () => {
    const array = [1, 2, 3];
    const allPermutations = [
      [1, 2, 3], [1, 3, 2], [2, 1, 3],
      [2, 3, 1], [3, 1, 2], [3, 2, 1]
    ];

    expect(permutations([1, 2, 3])).toEqual(allPermutations);
  });
});
