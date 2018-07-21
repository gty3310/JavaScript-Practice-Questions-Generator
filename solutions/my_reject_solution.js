Array.prototype.reject = function (func) {
  const selection = [];

  for (let i = 0; i < this.length; i++) {
    if (!func(this[i])) selection.push(this[i]);
  }

  return selection;
}
