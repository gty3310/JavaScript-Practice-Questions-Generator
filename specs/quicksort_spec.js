describe("quickSort", () => {
  it("Sorts an array of numbers with no duplicates", () => {
    const a = [ 2, 1, 3, 5, 0, 8, 4, 7, 6];
    expect(a.quickSort()).toEqual(a.sort());
  });

  it("Sorts an array of numbers with duplicates", () => {
    const a = [3, 1, 2, 3, 9, 17, 10, 432, 10];
    const sorted = [1, 2, 3, 3, 9, 10, 10, 17, 432];
    expect(a.quickSort()).toEqual(sorted);
  });

  it("Sorts according to the block passed in", () => {
    const a = [ 2, 1, 3, 5, 0, 8, 4, 7, 6];
    const callback = (x, y) => {
      if (y < x) return - 1;
      return 1;
    };

    expect(a.quickSort(callback)).toEqual(a.sort(callback));
  });
});
