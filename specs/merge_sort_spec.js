describe("#mergeSort", () => {
  beforeEach( () => {
    array = [3, 1, 2, 5, 4];
  });

  it("works with an empty array", () => {
    expect([].mergeSort()).toEqual([]);
  });

  it("works with an array of one item", () => {
    expect([1].mergeSort()).toEqual([1]);
  });

  it("sorts numbers", () => {
    expect(array.mergeSort()).toEqual(array.sort());
  });

  it("will use callback if given", () => {
    const callback = (x, y) => {
      if (y < x) return -1;
      return 1;
    };
    const reversed = array.mergeSort(callback);
    expect(reversed).toEqual([5, 4, 3, 2, 1])
  });

  it("does not modify original", () => {
    dupArray = array.slice(0);
    dupArray.mergeSort();
    expect(dupArray).toEqual(array);
  });
  //
  // it("calls the merge helper method", () => {
  //   expect(Array).to receive(:merge).at_least(:once).and_call_original
  //   array.mergeSort()
  // });
});
