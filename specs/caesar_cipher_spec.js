describe("#caesarCipher", () => {
  it("encodes a simple word", () => {
    expect(caesarCipher("aaa", 11)).toEqual("lll");
  });

  it("wraps around the alphabet", () => {
    expect(caesarCipher("zzz", 1)).toEqual("aaa");
  });

  it("encodes multiple words", () => {
    expect(caesarCipher("catz hatz", 2)).toEqual("ecvb jcvb");
  });
});
