describe('reject', () => {
  beforeEach( () => {
    a = [1, 2, 3];
  });

  it('it returns elements that do not match the passed in block', () => {
    const callback = x => x > 1;
    expect(a.reject(callback)).toEqual([1]);
  });

  it('It returns all elements if no elements match the block', () => {
    const callback = x => x === 4;
    expect(a.reject(callback)).toEqual([1,2,3]);
  });

});
