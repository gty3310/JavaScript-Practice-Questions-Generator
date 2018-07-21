Function.prototype.myCall = function (ctx, ...args) {
  return this.bind(ctx, ...args)();
};
