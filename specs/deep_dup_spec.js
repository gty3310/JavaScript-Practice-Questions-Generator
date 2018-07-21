describe("deepDup", () => {
  beforeEach( () => {
    robotParts = [
      ["nuts", "bolts", "washers"],
      ["capacitors", "resistors", "inductors"]
    ];
    
    copy = deepDup(robotParts);
  });

  it("makes a copy of the original array", () => {
    expect(copy).toEqual(robotParts);
  });

  it("deeply copies arrays", () => {
    copy[1].push("LEDs");
    expect(robotParts[1]).toEqual(["capacitors", "resistors", "inductors"]);
  });
});
