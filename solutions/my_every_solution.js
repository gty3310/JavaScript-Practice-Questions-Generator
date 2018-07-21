Array.prototype.myEvery = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (!func(this[i])) return false;
  }

  return true
}
