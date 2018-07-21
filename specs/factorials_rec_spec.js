describe("#factorialsRec", () => {
  it("returns first factorial number", () => {
    expect(factorialsRec(1)).toEqual([1]);
  });

  it("returns first two factorial numbers", () => {
    expect(factorialsRec(2)).toEqual([1, 1])
  });

  it("returns many factorials numbers", () => {
    expect(factorialsRec(6)).toEqual([1, 1, 2, 6, 24, 120]);
  });

  // it("calls itself recursively", () => {
  //   // this should enforce you calling your method recursively.
  //
  //   expect(self).to receive(:factorialsRec).at_least(:twice).and_call_original
  //   factorialsRec(6)
  // });
});
