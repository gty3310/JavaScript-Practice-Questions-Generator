describe("Function.prototype.myCurry", () => {
  const adder = function (...argBalls) {
    return argBalls.reduce((a, b) => {
      return a + b;
    }, 0);
  }
  const addObj = { adder };


  it("collects up arguments until there are numArgs of them", () => {
    expect(adder.myCurry(3)(1)(2)(3)).toEqual(6);
  });

  it("should return itself if there are too few arguments still", () => {
    const myCurryResult = adder.myCurry(3)(1)(2);
    expect(myCurryResult).not.toEqual(6);
    expect(typeof(myCurryResult)).toEqual("function");
  });

  it("should call the original function", () => {
    spyOn(addObj, "adder");

    addObj.adder.myCurry(3)(1)(2)(3);
    expect(addObj.adder).toHaveBeenCalled();
  });

});
