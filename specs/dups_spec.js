describe("#dups", () => {
  it("solves a simple example", () => {
    expect([1, 3, 0, 1].dups()).toEqual({ 1: [0, 3] });
  });

  it("finds two dups", () => {
    expect([1, 3, 0, 3, 1].dups()).toEqual({ 1: [0, 4], 3: [1, 3] });
  });

  it("finds multi-dups", () => {
    expect([1, 3, 4, 3, 0, 3].dups()).toEqual({ 3: [1, 3, 5] });
  });

  it("returns {} when no dups found", () => {
    expect([1, 3, 4, 5].dups()).toEqual({});
  });
});
