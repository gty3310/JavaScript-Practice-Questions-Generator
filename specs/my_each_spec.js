describe("myEach", () => {
  beforeEach( () => {
    callback = x => res.push(2 * x);
    array = [1, 2, 3];
  });

  it("it passes each element into a callback", () => {
    res = [];
    array.myEach(callback);
    expect(res).toEqual([2,4,6]);
  });

  it("returns the original array", () => {
    expect(array.myEach(callback)).toEqual([1, 2, 3]);
  });
});
