describe("#pigLatinify", () => {
  it("translates a word beginning with a vowel", () => {
    const s = pigLatinify("apple");
    expect(s).toEqual("appleay");
  });

  it("translates a word beginning with a consonant", () => {
    const s = pigLatinify("banana");
    expect(s).toEqual("ananabay");
  });

  it("translates a word beginning with two consonants", () => {
    const s = pigLatinify("cherry");
    expect(s).toEqual("errychay");
  });

  it("translates two words", () => {
    const s = pigLatinify("eat pie");
    expect(s).toEqual("eatay iepay");
  });

  it("translates a word beginning with three consonants", () => {
    expect(pigLatinify("three")).toEqual("eethray");;
  });

  it("counts 'sch' as a single phoneme", () => {
    const s = pigLatinify("school");
    expect(s).toEqual("oolschay");
  });

  it("counts 'qu' as a single phoneme", () => {
    const s = pigLatinify("quiet");
    expect(s).toEqual("ietquay");
  });

  it("counts 'qu' as a consonant when it's preceded by a consonant", () => {
    const s = pigLatinify("square");
    expect(s).toEqual("aresquay");
  });

  it("translates many words", () => {
    const s = pigLatinify("the quick brown fox");
    expect(s).toEqual("ethay ickquay ownbray oxfay");
  });
});
