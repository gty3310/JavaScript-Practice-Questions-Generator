describe("#doubler", () => {
  beforeEach(() => {
    array = [1, 2, 3];
  });

  it("doubles the elements of the array", () => {
    expect(doubler(array)).toEqual([2, 4, 6]);
  });

  it("does not modify the original array", () => {
    const dupArray = array.slice(0);

    doubler(array);

    expect(array).toEqual(dupArray);
  });
});
