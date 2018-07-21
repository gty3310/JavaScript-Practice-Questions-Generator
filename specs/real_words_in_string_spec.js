describe("realWordsInString", () => {
  it("finds a simple word", () => {
    const words = "asdfcatqwer".realWordsInString(["cat", "car"]);
    expect(words).toEqual(["cat"]);
  });

  it("doesn't find words not in the dictionary", () => {
    const words = "batcabtarbrat".realWordsInString(["cat", "car"]);
    expect(words).toEqual([]);
  });

  it("finds words within words", () => {
    const dictionary = ["bears", "ear", "a", "army"];
    const words = "erbearsweatmyajs".realWordsInString(dictionary);
    expect(words).toEqual(["bears", "ear", "a"]);
  });
});
