describe('myFilter', () => {
  beforeEach( () => {
    a = [1, 2, 3];
  });

  it('It correctly selects elements according to the passed in block', () => {
    const callback = x => x > 1;
    expect(a.myFilter(callback)).toEqual([2, 3]);
  });

  it('It returns an empty array if there are no matches', () => {
    const callback = x => x === 4;
    expect(a.myFilter(callback)).toEqual([]);
  });
});
