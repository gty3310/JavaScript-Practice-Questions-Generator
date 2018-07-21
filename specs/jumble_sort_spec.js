describe("#jumbleSort", () => {
  it("defaults to alphabetical order", () => {
    expect(jumbleSort("hello")).toEqual("ehllo");
  });

  it("takes an alphabet array and sorts by that order", () => {
    const alphabet = 'helo'.split('');

    expect(jumbleSort("hello", alphabet)).toEqual("hello");
  });

  it("sorts by a reversed alphabet", () => {
    reverse = 'abcdefghijklmnopqrstuvwxyz'.split('').reverse().join('')
    expect(jumbleSort("hello", reverse)).toEqual("ollhe");
  });
});
