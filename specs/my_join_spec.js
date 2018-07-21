describe("myJoin", () => {
  beforeEach( () => {
    const a = ['a', 'b', 'c', 'd'];
  });

  it("joins an array if no argument is passed", () => {
    expect(a.myJoin()).toEqual("abcd")
  });

  it("joins an array if an argument is passed", () => {
    expect(a.myJoin("$")).toEqual("a$b$c$d")
  });
});
