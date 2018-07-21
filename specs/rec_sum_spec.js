describe("#recSum", () => {
  it("returns the sums of all elements in an array", () => {
    arr = [1,2,3,4];
    expect(recSum(arr)).toEqual(10);
  });

  it("returns 0 if the array is empty", () => {
    expect(recSum([])).toEqual(0);
  });
});
