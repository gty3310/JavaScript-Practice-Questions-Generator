describe('Array#myReduce', () => {
  let myArray;
  const noOp = (accum, el) => accum;

  const spy = {
    sum: (accum, el) => accum + el
  };

  it("calls the callback, passing in the accumulator and each element", () => {
    myArray = [1, 2, 3];
    spyOn(spy, "sum").and.callThrough();

    myArray.myReduce(spy.sum);

    expect(spy.sum).toHaveBeenCalledWith(1, 2);
    expect(spy.sum).toHaveBeenCalledWith(3, 3);
  });

  it("works with a sum callback", () => {
    myArray = [1, 2, 3, 4];
    expect(myArray.myReduce(spy.sum)).toEqual(10);
  });

  it("works with a multiplier callback", () => {
    myArray = [4, 4, 4];
    const times = (accum, el) => accum * el;

    expect(myArray.myReduce(times)).toEqual(64);
  });

  it("uses the first item as the accumulator", () => {
    myArray = [1, 2, 3, 4];
    expect(myArray.myReduce(noOp)).toEqual(1);
  });

  it("does not call Array.prototype.reduce", () => {
    myArray = [1, 2, 3, 4];
    spyOn(myArray, "reduce");

    myArray.myReduce(spy.sum);

    expect(myArray.reduce).not.toHaveBeenCalled();
  });
});
