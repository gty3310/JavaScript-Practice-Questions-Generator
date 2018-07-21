describe('baseConverter', () => {
  it('converts a small number in binary', () => {
    expect(baseConverter(5, 2)).toEqual('101');
  });

  it('converts a large number into base 15', () => {
    expect(baseConverter(1239449, 16)).toEqual('12e999' || '12E999');
  });
});
