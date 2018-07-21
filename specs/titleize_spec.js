describe("titleize", () => {
  it("capitalizes a word", () => {
    expect(titleize("jaws")).toEqual("Jaws");
  });

  it("capitalizes every word (aka title case)", () => {
    expect(titleize("david copperfield")).toEqual("David Copperfield");
  });

  it("doesn't capitalize 'little words' in a title", () => {
    expect(titleize("war and peace")).toEqual("War and Peace");
  });

  it("does capitalize 'little words' at the start of a title", () => {
    expect(
      titleize("the bridge over the river kwai")
    ).toEqual("The Bridge over the River Kwai");
  });
});
