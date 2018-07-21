describe("#median", () => {
  beforeEach(() => {
    evenArray = [3, 2, 6, 7];
    oddArray = [3, 2, 6, 7, 1];
  });

  it("returns null for the empty array", () => {
    expect([].median()).toBe(null);
  });

  it("returns the element for an array of length 1", () => {
    expect([1].median()).toEqual(1);
  });

  it("returns the median of an odd-length array", () => {
    expect(oddArray.median()).toEqual(3);
  });

  it("returns the median of an even-length array", () => {
    expect(evenArray.median()).toEqual(4.5);
  });
});
