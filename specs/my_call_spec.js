describe("Function.prototype.myCall", () => {
  beforeEach(() => {
    class Cat {
      constructor (name) {
        this.name = name;
      }

      sayHello () {
        return this.name + " says hello!";
      }

      greetOne (otherCat) {
        return this.name + " says hello to " + otherCat.name;
      }

      greetTwo (otherCat1, otherCat2) {
        return this.name + " says hello to " + otherCat1.name + " and " +
          otherCat2.name;
      }
    }

    sally = new Cat("Sally");
    markov = new Cat("Markov");
    curie = new Cat("Curie");
  });

  it("invokes the function it is called on", () => {
    expect(sally.greetOne.myCall(sally, markov)).toEqual("Sally says hello to Markov");
  });

  it("can take any number of arguments", () => {
    expect(sally.greetTwo.myCall(sally, markov, curie))
      .toEqual("Sally says hello to Markov and Curie");
  });
  it("does not use the 'call' function", () => {
    spyOn(Function.prototype, "call").and.callThrough();

    sally.greetTwo.myCall(sally, markov, curie);
    const count = Function.prototype.call.calls.count()
    expect(count).toBeLessThan(1);
  });

  it("should call the function method style on the context", () => {
    expect(sally.sayHello.myCall(markov)).toEqual("Markov says hello!");
  });
});
