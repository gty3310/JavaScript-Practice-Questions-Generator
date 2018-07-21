describe("#bubbleSort", () => {
  beforeEach(() => {
    array = [3, 1, 5, 4, 2];
  })

  it("works with an empty array", () => {
    expect([].bubbleSort().join()).toEqual([].join());
  });

  it("works with an array of one item", () => {
    expect([1].bubbleSort().join('')).toEqual([1].join(''));
  })

  it("sorts numbers", () => {
    expect(array.bubbleSort().join('')).toEqual(array.sort().join(''));
  });

  it("does not modify the original array", () => {
    const sortedArray = array.bubbleSort()
    expect(sortedArray).not.toEqual(array);
  })

  it("will use a callback if given", () => {
    const descendSort = (x, y) => {
      if (x > y) return -1;
      return 1;
    }

    let sorted = array.bubbleSort(descendSort)
    expect(sorted.join('')).toEqual([5, 4, 3, 2, 1].join(''));
  });
});
