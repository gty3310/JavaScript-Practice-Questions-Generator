describe('mySome', () => {
  beforeEach( () => {
    a = [1, 2, 3];
  });

  it("returns true if any number matches the block", () => {
    const callback = x => x > 1;
    expect(a.mySome(callback)).toBe(true);
  });

  it("returns false if no elementes match the block", () => {
    const callback = x => x === 4;
    expect(a.mySome(callback)).toBe(false);
  });
});
