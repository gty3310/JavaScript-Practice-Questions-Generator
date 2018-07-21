Array.prototype.myReverse = function () {
  const dup = this.slice(0)
  for (let i = 1; i < this.length + 1; i++) {
    this[i - 1] = dup[this.length - i];
  }

  return this;
}
