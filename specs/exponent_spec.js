describe("exponent", () => {
  it("correctly handles positive powers", () => {
    expect(exponent(5, 3)).toEqual(125);
  });

  it("correctly handles negative powers", () => {
    expect(exponent(2, -3)).toEqual(1/8.0);
  });

  it("correctly handles 0", () => {
    expect(exponent(2, 0)).toEqual(1);
  });
});
