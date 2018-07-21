describe("#digitalRoot", () => {
  it("calculates the digital root of a single-digit number", () => {
    expect(digitalRoot(9)).toEqual(9);
  });

  it("calculates the digital root of a larger number", () => {
    expect(digitalRoot(4322)).toEqual(2);
  });
  //
  // it("does not call #to_s on the argument", () => {
  //   expect_any_instance_of(Fixnum).to_not receive(:to_s)
  //   digitalRoot(4322);
  // });
});
