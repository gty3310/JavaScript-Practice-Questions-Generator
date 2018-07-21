describe("#symmetricSubstrings", () => {
  it("handles a simple example", () => {
    expect("aba".symmetricSubstrings()).toEqual(["aba"]);
  });

  it("handles two substrings", () => {
    expect("aba1cdc".symmetricSubstrings()).toEqual(["aba", "cdc"]);
  });

  it("handles nested substrings", () => {
    expect("xabax".symmetricSubstrings()).toEqual(["aba", "xabax"]);
  });
});
