describe("#twoSum", () => {
  it("returns positions of pairs of numbers that add to zero", () => {
    expect([5, 1, -7, -5].twoSum()).toEqual([[0, 3]]);
  });

  it("finds multiple pairs", () => {
    expect([5, -1, -5, 1].twoSum()).toEqual([[0, 2], [1, 3]]);
  });

  it("finds pairs with same element", () => {
    expect([5, -5, -5].twoSum()).toEqual([[0, 1], [0, 2]]);
  });

  it("returns [] when no pair is found", () => {
    expect([5, 5, 3, 1].twoSum()).toEqual([]);
  });

  it("won't find spurious zero pairs", () => {
    expect([0, 1, 2, 3].twoSum()).toEqual([]);
  });

  it("will find real zero pairs", () => {
    expect([0, 1, 2, 0].twoSum()).toEqual([[0, 3]]);
  });
});
