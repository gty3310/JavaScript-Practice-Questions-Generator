describe('myEvery', () => {
  beforeEach( () => {
    a = [2, 4, 6];
  });

  it("returns true if all elements match the block", () => {
    const callback = x => x % 2 === 0;
    expect(a.myEvery(callback)).toBe(true);
  });

  it("returns false if not all elementes match the block", () => {
    const callback = x => x % 3 === 0;
    expect(a.myEvery(callback)).toBe(false);
  });
});
