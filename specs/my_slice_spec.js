describe("String.prototype.mySlice", () => {
  it("slices the string from the start index to the end index", () => {
    expect("abcd".mySlice(0, 2)).toEqual("ab");
  });

  it("slices to the end of the string when no second argument is passed", () => {
    expect("foobar".mySlice(3)).toEqual("bar");
  });

  it("returns an empty string when the first argument is higher", () => {
    expect("empty!".mySlice(1, 0)).toEqual("");
  });

  it("slices to the end of the string when the end index is greater than the string's length", () => {
    expect("super long string".mySlice(0, 200)).toEqual("super long string");
  });

  it("doesn't call `substr`, `slice`, or `substring`", () => {
    const str = new String("don't you do it!");
    spyOn(str, "substr");
    spyOn(str, "slice");
    spyOn(str, "substring");

    str.mySlice(0);

    expect(str.substr).not.toHaveBeenCalled();
    expect(str.slice).not.toHaveBeenCalled();
    expect(str.substring).not.toHaveBeenCalled();
  });
});
