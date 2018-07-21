describe("my_bsearch", () => {
  it("finds the first element in the array", () => {
    expect([1, 2, 3].myBsearch(1)).toEqual(0);
  });

  it("finds an element for an array with an even number of elements", () => {
    expect([2, 3, 4, 5].myBsearch(3)).toEqual(1);
  });

  it("finds an element for an array with an odd number of elements", () => {
    expect([2, 4, 6, 8, 10].myBsearch(6)).toEqual(2);
  });

  it("finds an element in the second half of the array (even)", () => {
    expect([1, 3, 4, 5, 9].myBsearch(5)).toEqual(3);
  });

  it("finds an element in the second half of the array (odd)", () => {
    expect([1, 2, 3, 4, 5, 6].myBsearch(6)).toEqual(5);
  });

  it("Returns nil if the element is not in the array (smaller)", () => {
    expect([1, 2, 3, 4, 5, 6].myBsearch(0)).toEqual(null);
  });

  it("Returns null if the element is not in the array (bigger)", () => {
    expect([1, 2, 3, 4, 5, 7].myBsearch(6)).toEqual(null);
  });
});
