describe("stringIncludeKey", () => {
  it("returns true for the same string", () => {
    expect(stringIncludeKey("adblfci", "abc")).toEqual(true);
  });

  it("handles keys with duplicate characters: case 1", () => {
    expect(stringIncludeKey("adbblfci", "abbc")).toEqual(true);
  });

  it("handles keys with duplicate characters: case 2", () => {
    expect(stringIncludeKey("adbclfci", "abbc")).toEqual(false);
  });

  it("returns false if the key characters are in the wrong order", () => {
    expect(stringIncludeKey("dblfcia", "abc")).toEqual(false);
  });

  it("returns false if the string doesn't contain the key", () => {
    expect(stringIncludeKey("db", "abc")).toEqual(false);
  });
});
