Function.prototype.myApply = function (ctx, ...args) {
  return this.bind(ctx, ...args)();
};
