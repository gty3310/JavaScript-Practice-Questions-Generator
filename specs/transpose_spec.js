describe("#transpose", () => {
  //before each necessary
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const small_arr = [
    [1, 2],
    [3, 4]
  ];
  const rect_arr = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  const tall_rect_arr = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];

  it("should transpose a matrix", () => {
    expect(transpose(arr)).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]);
  });

  it("should transpose a matrix of a different size", () => {
    expect(transpose(small_arr)).toEqual([
      [1, 3],
      [2, 4]
    ]);
  });

  it("should transpose a rectangular matrix", () => {
    expect(transpose(rect_arr)).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });

  it("should transpose a different rectangular matrix", () => {
    expect(transpose(tall_rect_arr)).toEqual([
      [1, 3, 5],
      [2, 4, 6]
    ]);
  });

  it("should not modify the original", () => {
    transpose(small_arr);
    expect(small_arr).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });
});
