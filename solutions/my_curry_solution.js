Function.prototype.myCurry = function (numArgs) {
  let argBalls = [];
  let fcn = this;
  return function _myCurry (el) {
    argBalls.push(el);
    if (argBalls.length < numArgs) {
      return _myCurry;
    } else {
      return fcn(...argBalls);
    }
  };
};
