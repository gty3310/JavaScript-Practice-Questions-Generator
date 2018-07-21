describe("Function.prototype.myBind", () => {
  // let Cat;
  let sally, markov, curie;

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

  it("should call the function method style on the context", () => {
    expect(sally.sayHello.myBind(sally)()).toEqual("Sally says hello!");
  });

  it("should pass in bind-time argument to the method", () => {
    expect(sally.greetOne.myBind(sally, markov)())
      .toEqual("Sally says hello to Markov");
  });

  it("should pass in two bind-time arguments to the method", () => {
    expect(sally.greetTwo.myBind(sally, markov, curie)())
      .toEqual("Sally says hello to Markov and Curie");
  });

  it("should combine bind-time and call-time arguments", () => {
    expect(sally.greetTwo.myBind(sally, markov)(curie))
      .toEqual("Sally says hello to Markov and Curie");
  });
});
